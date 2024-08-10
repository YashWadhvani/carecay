<template>
  <div ref="container" class="glb-container"></div>
</template>

<script>
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

export default {
  mounted() {
    // Set up Three.js scene
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setClearColor(0x000000); // Set background color to black
    this.$refs.container.appendChild(this.renderer.domElement);

    // Add lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7); // Soft light
    this.scene.add(ambientLight);

    const directionalLight1 = new THREE.DirectionalLight(0xffffff, 1.2); // Increased intensity
    directionalLight1.position.set(5, 10, 7).normalize();
    this.scene.add(directionalLight1);

    const directionalLight2 = new THREE.DirectionalLight(0xffffff, 0.8); // Additional light
    directionalLight2.position.set(-5, -10, -7).normalize();
    this.scene.add(directionalLight2);

    const directionalLight3 = new THREE.DirectionalLight(0xffffff, 0.7); // Additional light
    directionalLight3.position.set(0, 0, 5).normalize();
    this.scene.add(directionalLight3);

    // Load GLB model
    const loader = new GLTFLoader();
    loader.load(
      "/model6.glb",
      (gltf) => {
        this.model = gltf.scene;
        console.log("Model loaded:", this.model);

        // Log each mesh in the model
        this.model.traverse((child) => {
          if (child.isMesh) {
            console.log("Mesh:", child);

            // Apply metallic and shiny material
            child.material = new THREE.MeshStandardMaterial({
              color: 0xed6e5f, // Base color
              metalness: 1, // High metalness
              roughness: 0.4, // Slightly rough to avoid too much darkening
            });
          }
        });

        this.scene.add(this.model);
        this.model.scale.set(3, 3, 3); // Adjust scale
        this.model.position.set(0, 0, 0); // Center model

        // Debug model size and position
        const box = new THREE.Box3().setFromObject(this.model);
        console.log("Model bounding box:", box);

        // Initialize ScrollTrigger
        this.initScrollTrigger();
      },
      undefined,
      (error) => {
        console.error("Error loading model:", error);
      }
    );

    // Position the camera
    this.camera.position.set(0, 0, 10);
    this.camera.lookAt(0, 0, 0);

    // Set up OrbitControls
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.25;
    this.controls.enableZoom = true;

    // Render loop
    const animate = () => {
      requestAnimationFrame(animate);
      if (this.model) {
        this.model.rotation.y += 0.01; // Adjust the rotation speed as needed
      }
      this.controls.update(); // Update controls
      this.renderer.render(this.scene, this.camera);
    };
    animate();

    // Handle window resize
    window.addEventListener("resize", this.onWindowResize);
  },
  beforeDestroy() {
    // Clean up Three.js scene
    this.$refs.container.removeChild(this.renderer.domElement);
    this.renderer.dispose();
    window.removeEventListener("resize", this.onWindowResize);
  },
  methods: {
    onWindowResize() {
      this.camera.aspect = window.innerWidth / window.innerHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(window.innerWidth, window.innerHeight);
    },
    initScrollTrigger() {
      if (this.model) {
        // Ensure the model is defined
        console.log("Initializing ScrollTrigger"); // Debug log
        gsap.to(this.model.rotation, {
          y: Math.PI * 2, // Rotate 360 degrees
          duration: 10, // Duration of the rotation
          ease: "none",
          scrollTrigger: {
            trigger: this.$refs.container,
            start: "top top",
            end: "top 50%", // Adjust end position if needed
            scrub: true,
            // Show markers for debugging
            onUpdate: (self) => {
              console.log("Scroll position:", self.progress); // Log scroll progress
            },
            onEnter: () => {
              console.log("ScrollTrigger entered");
            },
            onLeave: () => {
              console.log("ScrollTrigger left");
            },
          },
          onUpdate: () => {
            console.log("Rotation:", this.model.rotation.y); // Log current rotation
          },
        });
      }
    },
  },
};
</script>

<style scoped>
.glb-container {
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  z-index: -1;
  pointer-events: none; /* Ensure mouse events are captured by controls */
}
</style>

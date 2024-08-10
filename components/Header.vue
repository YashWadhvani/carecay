<template>
  <div id="header" data-scroll-section>
    <div class="container-wide">
      <div class="row">
        <div class="col-20 d-flex">
          <div class="logo">
            <a href="/">
              <img src="../assets/images/carecay-logo.png" alt="" />
            </a>
          </div>
        </div>

        <div class="col-60 d-flex">
          <div class="menu">
            <div class="menu-links">
              <ul class="menu-links">
                <li>
                  <a href="/">New Cars</a>
                </li>
                <li>
                  <a href="/">Used Cars</a>
                </li>
                <li>
                  <a href="/">Insurance</a>
                </li>
                <li>
                  <a href="/">Workshop</a>
                </li>
                <li>
                  <a href="/">Detailing</a>
                </li>
                <li>
                  <a href="/">Finance</a>
                </li>
                <li>
                  <a href="/">Cars</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="col-20 d-flex">
          <div class="hamburger-icon" @click="toggleOverlay">
            <div class="ham-span" id="navLine1"></div>
            <div class="ham-span" id="navLine2"></div>
            <div class="ham-span" id="navLine3"></div>
          </div>
        </div>
      </div>
      <div class="overlay-bg" @click="toggleOverlay"></div>
      <div class="overlay-menu" ref="overlayMenu">
        <div class="menus">
          <div class="left-menu">
            <ul class="overlay-menu-links">
              <li>
                <a href="/">New Cars</a>
              </li>
              <li>
                <a href="/">Used Cars</a>
              </li>
              <li>
                <a href="/">Insurance</a>
              </li>
              <li>
                <a href="/">Workshop</a>
              </li>
              <li>
                <a href="/">Detailing</a>
              </li>
              <li>
                <a href="/">Finance</a>
              </li>
              <li>
                <a href="/">Cars</a>
              </li>
            </ul>
          </div>
          <div class="right-menu">
            <ul class="nav-links">
              <li><a href="/">Home</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/gallery">Gallery</a></li>
              <li><a href="/contact">Contact Us</a></li>
            </ul>
          </div>
        </div>
        <div class="socials">
          <div class="email-text">Get In Touch:</div>
          <div class="social-logos">
            <img src="../assets/images/facebook.png" alt="Facebook" />
            <img src="../assets/images/instagram.png" alt="Instagram" />
            <img src="../assets/images/whatsapp.png" alt="Whatsapp" />
          </div>
          <div class="email-text">Email: hello@carecay.com</div>
          <div class="email-text">Phone: 99987 52222</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from "vue";
import gsap from "gsap";

export default {
  setup() {
    const overlayMenu = ref(null);
    const hamburgerIcon = ref(null);
    let isMenuOpen = false;

    const toggleOverlay = () => {
      isMenuOpen = !isMenuOpen;
      if (isMenuOpen) {
        gsap.to("#navLine1", { rotation: 45, y: 6, duration: 0.3 });
        gsap.to("#navLine2", { opacity: 0, duration: 0.3 });
        gsap.to("#navLine3", { rotation: -45, y: -6, duration: 0.3 });
        gsap.to(overlayMenu.value, {
          right: 0,
          duration: 0.5,
          ease: "power3.inOut",
        });
        gsap.to(".overlay-bg", {
          opacity: 1,
          duration: 0.3,
          delay: 0.4,
          onComplete: function () {
            document.querySelector(".overlay-bg").style.pointerEvents = "auto";
          },
        });
      } else {
        gsap.to("#navLine1", { rotation: 0, y: 0, duration: 0.3 });
        gsap.to("#navLine2", { opacity: 1, duration: 0.3 });
        gsap.to("#navLine3", { rotation: 0, y: 0, duration: 0.3 });
        gsap.to(overlayMenu.value, {
          right: "-100%",
          duration: 0.5,
          ease: "power3.inOut",
        });
        gsap.to(".overlay-bg", {
          opacity: 0,
          duration: 0.3,
          delay: 0.2,
          onComplete: function () {
            document.querySelector(".overlay-bg").style.pointerEvents = "none";
          },
        });
      }
    };

    return {
      overlayMenu,
      hamburgerIcon,
      toggleOverlay,
    };
  },
};
</script>

<style lang="scss" src="./Header.scss" scoped></style>

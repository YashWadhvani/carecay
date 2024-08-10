<template>
  <div id="main" class="js-locomotive" data-scroll-container>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
import { useNuxtApp } from '#app';
import { onMounted } from 'vue';
import gsap from 'gsap';
import MouseFollower from 'mouse-follower';
const nuxtApp = useNuxtApp();

onMounted(() => {
  if (nuxtApp.$locomotiveScroll) {
    nuxtApp.$locomotiveScroll.update();
  } else {
    console.error('Locomotive Scroll instance not found');
  }

  MouseFollower.registerGSAP(gsap);
  
  const cursor = new MouseFollower({
    el: null,
    container: document.body,
    className: 'mf-cursor',
    innerClassName: 'mf-cursor-inner',
    textClassName: 'mf-cursor-text',
    mediaClassName: 'mf-cursor-media',
    mediaBoxClassName: 'mf-cursor-media-box',
    iconSvgClassName: 'mf-svgsprite',
    iconSvgNamePrefix: '-',
    iconSvgSrc: '',
    dataAttr: 'cursor',
    hiddenState: '-hidden',
    textState: '-text',
    iconState: '-icon',
    activeState: '-active',
    mediaState: '-media',
    stateDetection: {
        '-inverse-2': '.custom-button',
        '-pointer': '.link',
        '-hidden': 'iframe',
        '-inverse': '.dark-bg',
        '-text': '.custom-slider'
    },
    // visible: true,
    // visibleOnState: false,
    speed: 0.55,
    ease: 'expo.out',
    overwrite: true,
    skewing: 0,
    skewingText: 2,
    skewingIcon: 2,
    skewingMedia: 2,
    skewingDelta: 0.001,
    skewingDeltaMax: 0.55,
    stickDelta: 0.15,
    showTimeout: 20,
    hideOnLeave: true,
    hideTimeout: 300,
    hideMediaTimeout: 300,
  
});
const el = document.querySelectorAll('.custom-slider');

el.forEach(e=> {
  e.addEventListener('mouseenter', () => {
    cursor.setText('Drag');
  }); 
  })
  
});
</script>


<style src="./components/cursor.scss">
    
</style>

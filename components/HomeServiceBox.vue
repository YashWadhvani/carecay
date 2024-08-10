<template>
  <div class="hs-box">
    <div class="row">
      <div class="col-50">
        <div class="hs-box-content h-25">
          <div class="caption" v-if="caption">
            <span class="hs-box-icon"></span>
            <p>{{ caption }}</p>
          </div>

          <div class="hs-box-title">
            <h4>{{ title }}</h4>
          </div>
        </div>
      </div>
      <div class="col-50">
        <div class="hs-box-image-wrapper h-25">
          <div class="hs-box-image" :ref="setImageRef">
            <img :src="imgsrc" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (process.client) {
  gsap.registerPlugin(ScrollTrigger);
}

export default {
  props: {
    caption: {
      type: String,
    },
    title: {
      type: String,
    },
    imgsrc: {
      type: String,
    },
  },
  setup() {
    const imageRefs = ref([]);

    const setImageRef = (el) => {
      if (el) {
        imageRefs.value.push(el);
      }
    };

    onMounted(() => {
      imageRefs.value.forEach((image) => {
        gsap.fromTo(
          image,
          { width: "75%" },
          {
            width: "100%",

            scrollTrigger: {
              trigger: image,
              start: "top 105%",
              end: "top 50%",
              scroller: "[data-scroll-container]",
              scrub: true,
            },
          }
        );
      });
    });

    return {
      setImageRef,
    };
  },
};
</script>

<style lang="scss" src="./HomeServiceBox.scss" scoped></style>

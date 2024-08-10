<template>
  <div class="dc">
    <div class="container-wide">
      <div class="dc-slider custom-slider">
        <swiper
          :slides-per-view="slidesPerView"
          :space-between="15"
          :autoplay="true"
          :navigation="{
            nextEl: isMobile ? '.swiper-button-next' : null,
            prevEl: isMobile ? '.swiper-button-prev' : null,
          }"
          :modules="modules"
        >
          <swiper-slide>
            <div class="dc-card">
              <div class="dc-card-image-wrapper">
                <img src="../assets/images/sample-dir.png" alt="" />
                <div class="dc-span">
                  <Icon name="material-symbols:arrows-more-up-rounded" />
                </div>
              </div>
              <div class="dc-card-content">
                <h2>Rajan Desai</h2>
                <h4>Director of New Cars dept.</h4>
                <p>(Fav car: BMW M3 GTR 2001)</p>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="dc-card">
              <div class="dc-card-image-wrapper">
                <img src="../assets/images/sample-dir.png" alt="" />
                <div class="dc-span">
                  <Icon name="material-symbols:arrows-more-up-rounded" />
                </div>
              </div>
              <div class="dc-card-content">
                <h2>Ritesh Shah</h2>
                <h4>Director of New Cars dept.</h4>
                <p>(Fav car: BMW M3 GTR 2001)</p>
              </div>
            </div>
          </swiper-slide>

          <swiper-slide>
            <div class="dc-card">
              <div class="dc-card-image-wrapper">
                <img src="../assets/images/sample-dir.png" alt="" />
                <div class="dc-span">
                  <Icon name="material-symbols:arrows-more-up-rounded" />
                </div>
              </div>
              <div class="dc-card-content">
                <h2>Ritesh Shah</h2>
                <h4>Director of New Cars dept.</h4>
                <p>(Fav car: BMW M3 GTR 2001)</p>
              </div>
            </div>
          </swiper-slide>

          <swiper-slide>
            <div class="dc-card">
              <div class="dc-card-image-wrapper">
                <img src="../assets/images/sample-dir.png" alt="" />
                <div class="dc-span">
                  <Icon name="material-symbols:arrows-more-up-rounded" />
                </div>
              </div>
              <div class="dc-card-content">
                <h2>Ritesh Shah</h2>
                <h4>Director of New Cars dept.</h4>
                <p>(Fav car: BMW M3 GTR 2001)</p>
              </div>
            </div>
          </swiper-slide>
        </swiper>

        <div v-if="isMobile" class="swiper-navigation">
          <div class="swiper-button-prev custom-button"></div>
          <div class="swiper-button-next custom-button"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const slidesPerView = ref(2); // Responsiveness
    const isMobile = ref(false);
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log("slide change");
    };

    // Responsiveness
    const handleResize = () => {
      console.log(window.innerWidth);
      if (window.innerWidth <= 767) {
        console.log("Inside If");
        slidesPerView.value = 1;
        isMobile.value = true;
      } else {
        console.log("Inside Else");
        slidesPerView.value = 2;
        isMobile.value = false;
      }
    };

    onMounted(() => {
      handleResize();
      window.addEventListener("resize", handleResize);
    });

    onUnmounted(() => {
      window.removeEventListener("resize", handleResize);
    });

    // Responsiveness Code Ends

    return {
      onSwiper,
      onSlideChange,
      slidesPerView,
      isMobile,
      modules: [Navigation, Pagination],
    };
  },
};
</script>

<style lang="scss" src="./DirectorsCarousel.scss" scoped></style>

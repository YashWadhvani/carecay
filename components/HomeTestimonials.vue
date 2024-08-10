<template>
  <div class="ht" data-scroll-section>
    <div class="container-wide">
      <div class="ht-wrapper">
        <div class="ht-header">
          <div class="row">
            <div class="col-50">
              <div class="ht-caption">
                <span class="ht-box-icon"></span>
                <p>What they say about us</p>
              </div>
            </div>
            <div class="col-50">
              <div class="ht-title">
                <h2>
                  We care about our customers and they have a few things to say
                  for us. Have a look
                </h2>
              </div>
            </div>
          </div>
        </div>

        <div class="ht-main">
          <div class="row">
            <div class="col-50">
              <div class="ht-carousel">
                <swiper
                  :slides-per-view="1"
                  :pagination="{ clickable: true }"
                  :modules="modules"
                >
                  <swiper-slide>
                    <div class="ht-testimonial">
                      <p>
                        “Excellent Showroom for New and Used cars with all the
                        services like Display, workshop, insurance, detailing,
                        ceramic coating etc. available in house. Excellent Staff
                        and customer support.”
                      </p>
                      <h6>- Nikhil Dave</h6>
                    </div>
                  </swiper-slide>
                  <swiper-slide>
                    <div class="ht-testimonial">
                      <p>
                        “Excellent Showroom for New and Used cars with all the
                        services like Display, workshop, insurance, detailing,
                        ceramic coating etc. available in house. Excellent Staff
                        and customer support.”
                      </p>
                      <h6>- Bhavya Trivedi</h6>
                    </div>
                  </swiper-slide>
                </swiper>

                <!-- <div class="swiper-navigation">
                  <div class="swiper-button-prev custom-button"></div>
                  <div class="swiper-button-next custom-button"></div>
                </div> -->
              </div>
            </div>
            <div class="col-50 d-flex">
              <div class="ht-reviews-wrapper">
                <div class="ht-reviews colored">
                  <h2>3250+</h2>
                  <p>Cars Delivered</p>
                </div>

                <div class="ht-reviews">
                  <div class="ht-reviews-content">
                    <h2>4.5/5</h2>
                    <p>342 Reviews</p>
                  </div>
                  <p>Google Rating</p>
                </div>
              </div>
            </div>
          </div>
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
import "swiper/css/autoplay";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log("slide change");
    };
    return {
      onSwiper,
      onSlideChange,
      modules: [Navigation, Pagination],
    };
  },
};
</script>

<style lang="scss" src="./HomeTestimonials.scss" scoped></style>

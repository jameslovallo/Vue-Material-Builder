<template>
  <div v-swiper:mySwiper="swiperOption" :class="blok.helpers">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <img src="http://via.placeholder.com/640x360">
      </div>
      <div class="swiper-slide">
        <img src="http://via.placeholder.com/640x360">
      </div>
      <div class="swiper-slide">
        <img src="http://via.placeholder.com/640x360">
      </div>
      <div class="swiper-slide">
        <img src="http://via.placeholder.com/640x360">
      </div>
      <div class="swiper-slide">
        <img src="http://via.placeholder.com/640x360">
      </div>
      <div class="swiper-slide">
        <img src="http://via.placeholder.com/640x360">
      </div>
      <div class="swiper-slide">
        <img src="http://via.placeholder.com/640x360">
      </div>
    </div>
    <div class="swiper-pagination swiper-pagination-bullets"></div>
  </div>
</template>

<script>
export default {
  props: ["blok"],
  data() {
    return {
      swiperOption: {
        loop: true,
        effect: "coverflow",
        centeredSlides: true,
        slidesPerView: "auto",
        initialSlide: 1,
        slideToClickedSlide: true,
        keyboardControl: true,
        lazyLoading: true,
        preventClicks: false,
        lazyLoadingInPrevNext: true,
        coverflowEffect: {
          rotate: 0,
          stretch: 0,
          depth: 1000,
          modifier: 1,
          slideShadows: false
        },
        pagination: {
          el: ".swiper-pagination"
        }
      }
    };
  },
};
</script>

<style>
.swiper-slide {
  width: auto;
}
.swiper-slide * {
  border-radius: 10px;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.5);
}
</style>

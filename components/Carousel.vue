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
        slidesPerView: "auto",
        loop: true,
        centeredSlides: true,
        onlyExternal: true,
        effect: "coverflow",
        speed: 600,
        slideToClickedSlide: true,
        coverflowEffect: { slideShadows: false, rotate: 0 },
        pagination: {
          el: ".swiper-pagination"
        }
      }
    };
  }
};
</script>

<style>
.swiper-container-3d {
  perspective: 125;
}

.swiper-slide {
  width: auto;
}
.swiper-slide * {
  border-radius: 10px;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.5);
}
</style>

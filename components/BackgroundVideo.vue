<template>
  <div
    v-editable="blok"
    :class="['video-container', blok.helpers]"
    :style="`align-items: ${blok.vertical_alignment}; ${blok.style}`"
  >
    <div
      :style="`height: ${blok.height}; min-height: ${blok.min_height}; padding-top: ${aspectRatio}%;`"
    ></div>
    <video autoplay muted loop playsinline>
      <source v-if="blok.webm" :src="blok.webm" type="video/webm" />
      <source v-if="blok.mp4" :src="blok.mp4" type="video/mp4" />
    </video>
    <div class="video-content">
      <component
        :key="blok._uid"
        v-for="blok in blok.content"
        :blok="blok"
        :is="blok.component | dashify"
      ></component>
    </div>
  </div>
</template>

<script>
export default {
  props: ["blok"],
  computed: {
    aspectRatio() {
      return 100 / this.blok.aspect_ratio;
    }
  }
};
</script>

<style lang="scss">
.video {
  &-container {
    position: relative;
    overflow: hidden;
    display: flex;
    justify-content: center;
    width: 100%;
  }
  &-content {
    position: absolute;
    height: 100%;
    width: 100%;
    z-index: 2;
  }
}

video {
  z-index: 1;
  position: absolute;
  object-fit: cover;
  min-width: 100%;
  min-height: 100%;
}
</style>


<template>
  <div class="embed-container">
    <iframe :src="`https://www.youtube.com/embed/${blok.youtube_id}?rel=0${blok.hide_controls}`" frameborder="0" allowfullscreen></iframe>
  </div>
</template>

<script>
export default {
  props: ["blok"]
};
</script>

<style>
.embed-container {
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  overflow: hidden;
  max-width: 100%;
}
.embed-container iframe,
.embed-container object,
.embed-container embed {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>

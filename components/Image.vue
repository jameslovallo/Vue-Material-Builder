<template>
  <v-img
    v-editable="blok"
    :alt="blok.alt"
    :aspect-ratio="blok.aspectratio"
    :contain="blok.contain"
    :gradient="blok.gradient"
    :height="blok.height"
    :lazy-src="blok.src"
    :max-height="blok.maxheight"
    :max-width="blok.maxwidth"
    :min-height="blok.minheight"
    :min-width="blok.minwidth"
    :position="blok.hor + '% ' + blok.ver + '%'"
    :sizes="blok.sizes"
    :src="blok.src"
    :srcset="blok.srcset"
    :width="blok.width"
    :class="[blok.helpers, blok.blur_background]"
    :style="blok.style"
  >
    <component
      :key="blok._uid"
      v-for="blok in blok.image_content"
      :blok="blok"
      :is="blok.component | dashify"
    ></component>
  </v-img>
</template>

<script>
export default {
  props: ["blok"]
};
</script>

<style>
.blur-bg {
  overflow: hidden;
  position: relative;
  border: 1px solid rgba(0,0,0,0.5)
}

.blur-bg > .v-image__image {
  background-attachment: fixed;
  position: absolute;
  filter: blur(5px);
  height: calc(100% + 20px);
  width: calc(100% + 20px);
  top: -10px;
  left: -10px;
}
</style>

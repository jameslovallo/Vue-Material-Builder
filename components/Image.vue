<template>
  <v-img
    v-editable="blok"
    :alt="blok.alt"
    :aspect-ratio="blok.aspectratio"
    :contain="blok.contain"
    :gradient="blok.gradient"
    :height="blok.height"
    :lazy-src="blok.src ? blok.src : `https://source.unsplash.com/random/${blok.width ? blok.width : randomWidth}x${blok.height ? blok.height : randomHeight}?${blok.placeholder_search_term}`"
    :max-height="blok.maxheight"
    :max-width="blok.maxwidth"
    :min-height="blok.minheight"
    :min-width="blok.minwidth"
    :position="blok.hor + '% ' + blok.ver + '%'"
    :sizes="blok.sizes"
    :src="blok.src ? blok.src : `https://source.unsplash.com/random/${blok.width ? blok.width : randomWidth}x${blok.height ? blok.height : randomHeight}?${blok.placeholder_search_term}`"
    :width="blok.width"
    :class="blok.helpers"
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
  props: ["blok"],
  computed: {
    randomHeight() {
      var min = Math.ceil(1000);
      var max = Math.floor(500);
      return Math.floor(Math.random() * (max - min)) + min;
    },
    randomWidth() {
      var min = Math.ceil(1000);
      var max = Math.floor(500);
      return Math.floor(Math.random() * (max - min)) + min;
    }
  }
};
</script>

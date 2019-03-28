<template>
  <div v-editable="blok">
    <v-img
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
      :transition="blok.transition"
      :width="blok.width"
    ></v-img>
  </div>
</template>

<script>
export default {
  props: ["blok"]
};
</script>

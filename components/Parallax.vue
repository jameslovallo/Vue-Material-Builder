<template>
  <v-parallax :src="blok.image" :height="blok.height" :alt="blok.alt">
    <component
      :key="blok._uid"
      v-for="blok in blok.parallax_content"
      :blok="blok"
      :is="blok.component | dashify"
    ></component>
  </v-parallax>
</template>

<script>
export default {
  props: ["blok"]
};
</script>

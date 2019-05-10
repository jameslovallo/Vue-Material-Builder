<template>
  <v-parallax v-editable="blok" :src="blok.image" :height="blok.height" :alt="blok.alt" :class="blok.helpers" :style="blok.style">
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

<style>
.v-parallax__content {
  background: linear-gradient(transparent, rgba(0,0,0,0.25));
}
</style>


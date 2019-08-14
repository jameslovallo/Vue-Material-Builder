<template>
  <v-carousel-item v-editable="blok" :disabled="blok.disabled">
    <component
      :key="blok._uid"
      v-for="blok in blok.content"
      :blok="blok"
      :is="blok.component | dashify"
    ></component>
  </v-carousel-item>
</template>

<script>
export default {
  props: ["blok"]
};
</script>

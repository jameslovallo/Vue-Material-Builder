<template>
  <v-container v-editable="blok" :class="[blok.helpers, blok.fill_height ? 'fill-height': '']">
    <component
      :key="blok._uid"
      v-for="blok in blok.rowcontent"
      :blok="blok"
      :is="blok.component | dashify"
    ></component>
  </v-container>
</template>

<script>
export default {
  props: ["blok"]
};
</script>

<style>
@media (min-width: 1904px) {
  .container {
    max-width: 1400px;
  }
}
</style>

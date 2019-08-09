<template>
  <v-container
    v-editable="blok"
    :class="[blok.helpers, blok.remove_gutter, `align-${blok.align}`, `justify-${blok.justify}`, blok.row_or_column]"
    :column="blok.column"
    :fill-height="blok.fill_height"
    :row="blok.row"
    :style="blok.style"
    :wrap="blok.wrap"
  >
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
.container {
  margin: 0 auto;
}
</style>

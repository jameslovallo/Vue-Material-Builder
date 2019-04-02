<template>
  <masonry
    v-editable="blok"
    :cols="{default: blok.default_rows, 599: blok.xs_rows, 959: blok.sm_rows, 1263: blok.md_rows, 1903: blok.lg_rows}"
    :class="[blok.helpers, 'masonry']"
    :gutter="10"
    :style="blok.style"
  >
    <component
      :key="blok._uid"
      v-for="blok in blok.content"
      :blok="blok"
      :is="blok.component | dashify"
      class="masonry-content"
    ></component>
  </masonry>
</template>

<script>
export default {
  props: ["blok"],
};
</script>

<style>
.masonry-content {
  margin-bottom: 10px;
}
.masonry {
  margin-bottom: -10px;
}
</style>

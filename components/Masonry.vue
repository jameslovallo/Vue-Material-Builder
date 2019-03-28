<template>
  <div v-editable="blok" class="masonry">
    <div :class="blok.helpers" :style="blok.style">
      <masonry
        :cols="{default: blok.default_rows, 599: blok.xs_rows, 959: blok.sm_rows, 1263: blok.md_rows, 1903: blok.lg_rows}"
        :gutter="10"
      >
        <component
          :key="blok._uid"
          v-for="blok in blok.content"
          :blok="blok"
          :is="blok.component | dashify"
          class="masonry-content"
        ></component>
      </masonry>
    </div>
  </div>
</template>

<script>
export default {
  props: ["blok"],
  watch: {
    question: function (blok) {
      var gutter = blok.gutter;
      return gutter
    }
  }
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

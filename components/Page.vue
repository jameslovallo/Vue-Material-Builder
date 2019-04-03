<template>
  <v-content v-editable="blok" class="page" v-id="blok.name" style="min-height: var(--vh, 100vw);">
    <component
      :key="blok._uid"
      v-for="blok in blok.main_navigation"
      :blok="blok"
      :is="blok.component | dashify"
    ></component>
    <div class="page-hero">
      <component
        :key="blok._uid"
        v-for="blok in blok.hero"
        :blok="blok"
        :is="blok.component | dashify"
      ></component>
    </div>
    <div :class="['page-content', blok.page_layout]">
      <component
        :key="blok._uid"
        v-for="blok in blok.body"
        :blok="blok"
        :is="blok.component | dashify"
      ></component>
    </div>
    <div
      class="page-background"
      :style="'background:' + blok.background_color + ' url(' + '\'' + blok.background_image + '\'' + ')  ' + blok.background_repeat + ' ' + blok.background_vertical_alignment + ' ' + blok.background_horizontal_alignment + '/' + blok.background_image_size"
    ></div>
  </v-content>
</template>

<script>
export default {
  props: ["blok"]
};
</script>

<style>
.page {
  position: relative;
}
.page-background {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
}
</style>

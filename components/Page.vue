<template>
  <v-content v-editable="blok" :id="pageID" class="page" style="min-height: var(--vh, 100vw);">
    <div
      v-if="blok.use_background"
      class="page-background"
      :style="`background: url(${blok.background_image}) ${blok.background_repeat} ${blok.background_horizontal_alignment} ${blok.background_vertical_alignment}/${blok.background_image_size}`"
    ></div>
    <div class="page-hero">
      <component
        :key="blok._uid"
        v-for="blok in blok.hero"
        :blok="blok"
        :is="blok.component | dashify"
      ></component>
    </div>
    <div :class="['page-content', blok.page_layout, 'py-5']">
      <component
        :key="blok._uid"
        v-for="blok in blok.body"
        :blok="blok"
        :is="blok.component | dashify"
      ></component>
    </div>
  </v-content>
</template>

<script>
export default {
  props: ["blok"],
  computed: {
    // a computed getter
    pageID() {
      return "home_" + this.$route.params.pathMatch.replace("/", "_");
    }
  }
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
}
</style>

<template>
  <div v-editable="blok" :id="pageID ? pageID : 'home'" class="page">
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
    <div class="page-footer">
      <component
        :key="blok._uid"
        v-for="blok in blok.footer"
        :blok="blok"
        :is="blok.component | dashify"
      ></component>
    </div>
  </div>
</template>

<script>
export default {
  props: ["blok"],
  computed: {
    pageID() {
      return this.$route.params.pathMatch;
    }
  }
};
</script>

<style>
.page {
  position: relative;
  height: 100%;
}
.page-background {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
</style>

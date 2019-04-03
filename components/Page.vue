<template>
  <v-content v-editable="blok" class="page" :id="blok.name" style="min-height: 100vh;">
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
  </v-content>
</template>

<script>
export default {
  props: ["blok"]
};
</script>

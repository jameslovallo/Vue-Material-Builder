<template>
  <div id="tooltip-flexbox-fix">
    <v-tooltip
      v-editable="blok"
      :disabled="!blok.enable_tooltip"
      :bottom="blok.tooltip_direction === 'bottom'"
      :left="blok.tooltip_direction === 'left'"
      :right="blok.tooltip_direction === 'right'"
      :top="blok.tooltip_direction === 'top'"
      :color="blok.tooltip_color"
      :helpers="blok.helpers"
      :style="blok.style"
    >
      <template v-slot:activator="{ on }">
        <a v-if="blok.action==='href'" :href="blok.path" target="_blank" v-on="on">
          <component
            :key="blok._uid"
            v-for="blok in blok.content"
            :blok="blok"
            :is="blok.component | dashify"
          ></component>
        </a>
        <nuxt-link v-if="blok.action==='nuxt'" :to="blok.path" v-on="on">
          <component
            :key="blok._uid"
            v-for="blok in blok.content"
            :blok="blok"
            :is="blok.component | dashify"
          ></component>
        </nuxt-link>
        <div v-if="blok.action==='top'" @click="scrollToTop" style="cursor: pointer" v-on="on">
          <component
            :key="blok._uid"
            v-for="blok in blok.content"
            :blok="blok"
            :is="blok.component | dashify"
          ></component>
        </div>
      </template>
      <span>{{blok.tooltip_text}}</span>
    </v-tooltip>
  </div>
</template>

<script>
export default {
  props: ["blok"],
  methods: {
    scrollToTop() {
      window.scroll({
        top: 0,
        behavior: "smooth"
      });
    }
  }
};
</script>

<style scoped>
a {
  text-decoration: none;
  color: white;
}
</style>

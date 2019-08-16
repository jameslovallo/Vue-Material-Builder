<template>
  <v-app :dark="setTheme">
    <!-- DRAWERS -->
    <v-navigation-drawer
      v-if="blok.sidebar_content != false"
      v-model="drawer"
      clipped
      app
      :class="blok.drawer_helpers"
      :dark="blok.drawer_dark"
    >
      <component
        :key="blok._uid"
        v-for="blok in blok.sidebar_content"
        :blok="blok"
        :is="blok.component | dashify"
      ></component>
    </v-navigation-drawer>
    <!-- TOOLBAR -->
    <v-app-bar
      v-if="blok.toolbar_content"
      app
      clipped-left
      :color="blok.color"
      :dark="blok.dark"
      :height="blok.height"
      :flat="blok.flat"
      :dense="blok.dense"
      :class="blok.helpers"
      :style="blok.style"
    >
      <v-toolbar-side-icon
        v-if="blok.sidebar_content != false"
        @click="drawer = !drawer"
        class="hidden-md-and-up"
      ></v-toolbar-side-icon>
      <component
        :key="blok._uid"
        v-for="blok in blok.toolbar_content"
        :blok="blok"
        :is="blok.component | dashify"
      ></component>
    </v-app-bar>
    <v-content>
      <nuxt />
    </v-content>
    <v-footer
      v-if="blok.footer_content != false"
      :app="blok.footer_fixed"
      :inset="blok.footer_inset"
      :color="blok.footer_color"
      :dark="blok.footer_dark"
      :height="blok.footer_height"
    >
      <component
        :key="blok._uid"
        v-for="blok in blok.footer_content"
        :blok="blok"
        :is="blok.component | dashify"
      ></component>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  props: ["blok"],
  data() {
    return {
      drawer: null
    };
  },
  computed: {
    setTheme() {
      if (this.blok.light_or_dark == "light") {
        return false;
      } else if (this.blok.light_or_dark == "dark") {
        return true;
      } else if (this.blok.light_or_dark == "dynamic") {
        if (process.client) {
          if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            return true;
          }
        }
      }
    }
  }
};
</script>

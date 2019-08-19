<template>
  <v-app>
    <!-- DRAWERS -->
    <v-navigation-drawer
      v-editable="blok"
      v-if="blok.sidebar_content != false"
      v-model="drawer"
      clipped
      app
      :class="blok.drawer_helpers"
      :dark="blok.drawer_dark"
      :width="blok.drawer_width"
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
      v-editable="blok"
      v-if="blok.toolbar_content"
      app
      clipped-left
      :color="blok.color | lightOrDark(this.$vuetify.theme.dark)"
      :dark="blok.dark"
      :height="blok.height"
      :flat="blok.flat"
      :dense="blok.dense"
      :class="blok.helpers"
      :style="blok.style"
    >
      <v-app-bar-nav-icon v-if="blok.sidebar_content != false" @click="drawer = !drawer"></v-app-bar-nav-icon>
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
      v-editable="blok"
      v-if="blok.footer_content != false"
      :app="blok.footer_fixed"
      :inset="blok.footer_inset"
      :color="blok.footer_color | lightOrDark(this.$vuetify.theme.dark)"
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
    <style>
  {{blok.css}}
    </style>
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
  head() {
    return {
      title: this.blok.site_name,
      description: this.blok.site_description,
      link: [
        // Favicon
        {
          rel: "icon",
          type: "image/x-icon",
          href: this.blok.favicon ? this.blok.favicon : "/favicon.ico"
        }
      ],
      link: [
        // Favicon
        {
          rel: "stylesheet",
          type: "text/css",
          href: this.blok.font
        }
      ]
    };
  },
  mounted() {
    switch (this.blok.theme) {
      case "light":
        break;
      case "dark":
        this.$vuetify.theme.dark = true;
      case "auto":
        this.$vuetify.theme.dark = this.detectTheme;
        break;
      default:
        break;
    }
    if (this.blok.primary) {
      this.$vuetify.theme.themes.light.primary = this.blok.primary;
    }
  },
  computed: {
    detectTheme() {
      if (process.client) {
        return window.matchMedia("(prefers-color-scheme: dark)").matches
          ? true
          : false;
      }
    }
  }
};
</script>

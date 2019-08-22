<template>
  <v-app>
    <v-navigation-drawer
      v-editable="blok"
      v-if="blok.sidebar_content != false"
      v-model="drawer"
      clipped
      app
      :class="blok.drawer_helpers"
      :dark="blok.drawer_dark"
      :width="blok.drawer_width"
      :color="blok.drawer_color | lightOrDark(this.$vuetify.theme.dark)"
    >
      <component
        v-for="blok in blok.sidebar_content"
        :key="blok._uid"
        :blok="blok"
        :is="blok.component | dashify"
      ></component>
      {{blok.drawer_color}}
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
      <v-app-bar-nav-icon
        v-if="blok.sidebar_content != false"
        @click="drawer = !drawer"
        aria-label="Toggle the Sidebar Navigation"
      ></v-app-bar-nav-icon>
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
      :inset="blok.footer_inset"
      app
      :absolute="blok.footer_inset"
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
    <v-btn
      v-if="blok.show_theme_switcher"
      @click="$vuetify.theme.dark = !$vuetify.theme.dark"
      fab
      color="primary"
      fixed
      bottom
      right
    >
      <v-icon v-if="this.$vuetify.theme.dark">mdi-weather-night</v-icon>
      <v-icon v-if="!this.$vuetify.theme.dark">mdi-weather-sunny</v-icon>
    </v-btn>
    <style>
  {{blok.css}}
    </style>
  </v-app>
</template>

<script>
import axios from "axios";
export default {
  data: () => ({ blok: {}, drawer: null }),
  mounted() {
    this.getData();
    this.setTheme();
  },
  methods: {
    async getData() {
      let url = `https://api.storyblok.com/v1/cdn/stories/global?token=${process.env.token}`;
      axios
        .get(url)
        .then(response => {
          this.blok = response.data.story.content.navigation[0];
        })
        .then(console.log(this.blok))
        .catch(error => console.log("Error:", error));
    },
    detectTheme() {
      if (process.client) {
        return window.matchMedia("(prefers-color-scheme: dark)").matches
          ? true
          : false;
      }
    },
    setTheme() {
      if (this.blok.primary) {
        this.$vuetify.theme.themes.light.primary = this.blok.primary;
      }
      if (this.blok.primary_dark) {
        this.$vuetify.theme.themes.dark.primary = this.blok.primary_dark;
      }
      switch (this.blok.theme) {
        case "light":
          this.$vuetify.theme.dark = false;
          break;
        case "dark":
          this.$vuetify.theme.dark = true;
        case "auto":
          this.$vuetify.theme.dark = this.detectTheme;
          break;
        default:
          break;
      }
    }
  },
  head() {
    return {
      title: this.blok.site_name,
      description: this.blok.site_description,
      link: [
        // CSS overrides from authoring
        {
          rel: "stylesheet",
          type: "text/css",
          href: this.blok.font
        }
      ]
    };
  }
};
</script>

<style>
.v-footer--absolute.v-footer--inset {
  width: auto;
}
</style>

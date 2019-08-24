<template>
  <v-app>
    <v-navigation-drawer
      v-if="blok.sidebar_content != false"
      v-model="sidebar"
      app
      :clipped="!blok.sidebar_prominent"
      :class="blok.sidebar_helpers"
      :color="blok.sidebar_color | lightOrDark(this.$vuetify.theme.dark)"
      :dark="blok.sidebar_dark"
      :style="blok.sidebar_style"
      :width="blok.sidebar_width"
    >
      <component
        v-for="blok in blok.sidebar_content"
        :key="blok._uid"
        :blok="blok"
        :is="blok.component | dashify"
      ></component>
    </v-navigation-drawer>
    <!-- TOOLBAR -->
    <v-app-bar
      v-if="blok.toolbar_content ? blok.toolbar_content.length > 0 : false"
      app
      :clipped-left="!blok.sidebar_prominent"
      :color="blok.toolbar_color | lightOrDark(this.$vuetify.theme.dark)"
      :dark="blok.toolbar_dark"
      :height="blok.toolbar_height"
      :flat="blok.toolbar_flat"
      :dense="blok.toolbar_dense"
      :class="blok.toolbar_helpers"
      :style="blok.toolbar_style"
    >
      <v-app-bar-nav-icon
        v-if="blok.sidebar_content != false"
        @click="sidebar = !sidebar"
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
      v-if="blok.footer_content != false"
      app
      :inset="blok.footer_inset"
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
export default {
  data: () => ({
    blok: {},
    sidebar: false
  }),
  mounted() {
    this.getData();
    if (process.client && process.env.theme === "auto") {
      window.matchMedia("(prefers-color-scheme: dark)").matches
        ? (this.$vuetify.theme.dark = true)
        : (this.$vuetify.theme.dark = false);
    }
  },
  methods: {
    getData() {
      // load js client
      const StoryblokClient = require("storyblok-js-client");

      // init with access token
      const Storyblok = new StoryblokClient({
        accessToken: process.env.token,
        cache: {
          clear: "auto",
          type: "memory"
        }
      });

      Storyblok.get("cdn/stories/layout", {})
        .then(response => {
          this.blok = response.data.story.content;
          this.sidebar = null;
        })
        .catch(error => {
          console.log(error);
        });
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

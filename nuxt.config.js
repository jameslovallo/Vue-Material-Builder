require('dotenv').config();
import axios from 'axios';

// Site-Specific Settings
const SiteName = process.env.SITE_NAME;
const SiteUrl = process.env.SITE_URL;
const StoryblokToken = process.env.STORYBLOK_TOKEN;
const BingWebmasterID = process.env.BING_WEBMASTER;
const GoogleAnalyticsID = process.env.GOOGLE_ANALYTICS;
const ProgressBarColor = process.env.PROGRESS_BAR_COLOR
  ? process.env.PROGRESS_BAR_COLOR
  : '#fff';
const ThemePrimary = process.env.THEME_PRIMARY
  ? process.env.THEME_PRIMARY
  : '#2979FF';
const DarkThemePrimary = process.env.DARK_THEME_PRIMARY
  ? process.env.DARK_THEME_PRIMARY
  : '#2979FF';
const DarkTheme = process.env.DARK_THEME === 'true' ? true : false;

module.exports = {
  mode: 'universal',

  // Page Headers
  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'msvalidate.01', content: BingWebmasterID }
    ]
  },

  // Progress Bar
  loading: { color: ProgressBarColor },

  // Plugins
  plugins: [
    '~/plugins/components',
    '~/plugins/filters',
    '~/plugins/masonry',
    { src: 'plugins/vue-typer.js', ssr: false },
    { src: 'plugins/vue-carousel-3d.js', ssr: false },
    { src: 'plugins/magicgrid.js', ssr: false }
  ],

  // Nuxt Modules
  modules: [
    [
      'storyblok-nuxt',
      { accessToken: StoryblokToken, cacheProvider: 'memory' }
    ],
    ['@nuxtjs/markdownit'],
    [
      '@nuxtjs/pwa',
      {
        meta: {
          nativeUI: true,
          theme_color: ThemePrimary,
          name: SiteName,
          appleStatusBarStyle: 'black-translucent'
        }
      }
    ],
    ['@nuxtjs/sitemap']
  ],

  devModules: ['@nuxtjs/vuetify'],

  vuetify: {
    customProperties: true,
    defaultAssets: {
      font: true,
      icons: 'mdi'
    },
    theme: {
      dark: DarkTheme,
      themes: {
        light: {
          primary: ThemePrimary
        },
        dark: {
          primary: DarkThemePrimary
        }
      },
      options: {
        customProperties: true
      }
    }
  },

  css: ['@/assets/style/style.scss'],

  // Sitemap Config
  sitemap: {
    hostname: SiteUrl,
    gzip: true,
    exclude: ['/global']
  },

  // Google Analytics
  googleAnalytics: {
    id: GoogleAnalyticsID,
    dev: false
  },

  // Markdown-It Config
  markdownit: { injected: true },

  // Router Middleware
  router: {
    middleware: 'setCacheVersion'
  },

  // Build Configuration
  build: {
    extractCSS: true,
    // PostCSS Config
    postcss: {
      // Add plugin names as key and arguments as value
      // Install them before as dependencies with npm or yarn
      plugins: {
        // Disable a plugin by passing false as value
        'postcss-responsive-type': {}
      },
      preset: {
        // Change the postcss-preset-env settings
        autoprefixer: {
          grid: true
        }
      }
    },

    // You can extend webpack config here
    extend(config, ctx) {}
  },

  // Generate Routes
  generate: {
    routes: function(callback) {
      const version = 'published';
      let cache_version = 0;

      // Other routes that are not in Storyblok with their slug.
      let routes = ['/', '/home'];

      // Load space and receive latest cache version key to improve performance
      axios
        .get(
          `https://api.storyblok.com/v1/cdn/spaces/me?token=${StoryblokToken}`
        )
        .then(space_res => {
          // timestamp of latest publish
          cache_version = space_res.data.space.version;

          // Call for all Links using the Links API: https://www.storyblok.com/docs/Delivery-Api/Links
          axios
            .get(
              `https://api.storyblok.com/v1/cdn/links?token=${StoryblokToken}&version=${version}&cv=${cache_version}`
            )
            .then(res => {
              Object.keys(res.data.links).forEach(key => {
                if (res.data.links[key].slug != 'home') {
                  routes.push('/' + res.data.links[key].slug);
                }
              });

              callback(null, routes);
            });
        });
    }
  }
};

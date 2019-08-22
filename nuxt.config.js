import axios from 'axios'; // Load dependencies
require('dotenv').config(); // Allow .env files

//
//
//     ___ _ ____   __
//    / _ \ '_ \ \ / /
//   |  __/ | | \ V /
//    \___|_| |_|\_/
//
//

// GET SITE SETTINGS FROM NETLIFY ENVIRONMENT VARIABLES

//// Storyblok Preview Token
const TOKEN = process.env.STORYBLOK_TOKEN;

//// Meta
const NAME = process.env.SITE_NAME;
const URL = process.env.SITE_URL;
const ICON = process.env.SITE_ICON;
const FAVICON = process.env.SITE_FAVICON;
const ANALYTICS = process.env.GOOGLE_ANALYTICS;
const BING_ID = process.env.BING_WEBMASTER;

//// Theme
const PROGRESS = process.env.PROGRESS_BAR_COLOR;
const DARK = process.env.DARK_THEME === 'true' ? true : false;
const PRIMARY_LIGHT = process.env.THEME_PRIMARY;
const PRIMARY_DARK = process.env.DARK_THEME_PRIMARY;
const PWA_THEME = process.env.PWA_COLOR; // Use nav color;

/////////////////////////////
// NUXT CONFIG STARTS HERE //
/////////////////////////////

module.exports = {
  mode: 'universal', // Enable server-side rendering
  env: { token: TOKEN },

  //                   _
  //                  | |
  //    _ __ ___   ___| |_ __ _
  //   | '_ ` _ \ / _ \ __/ _` |
  //   | | | | | |  __/ || (_| |
  //   |_| |_| |_|\___|\__\__,_|
  //
  //

  // SET THE SITE'S META TAGS AND PWA MANIFEST FILE

  // Progress Bar Color
  loading: { color: PROGRESS ? PROGRESS : '#fff' },

  // Custom Site Meta (i.e. favicons)
  head: {
    meta: [{ name: 'msvalidate.01', content: BING_ID }],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: FAVICON ? FAVICON : '/favicon.ico'
      }
    ]
  },

  // Site Meta (Through PWA Submodule)
  meta: {
    name: NAME
  },
  icon: {
    iconFileName: ICON ? ICON : '/icon.png'
  },

  // Web App Manifest (Through PWA Submodule)
  manifest: {
    name: NAME,
    short_name: NAME,
    theme_color: PWA_THEME,
    icons: [
      {
        src: ICON ? ICON : '/icon.png',
        sizes: '512x512',
        type: 'image/png'
      }
    ]
  },

  //          _             _
  //         | |           (_)
  //    _ __ | |_   _  __ _ _ _ __  ___
  //   | '_ \| | | | |/ _` | | '_ \/ __|
  //   | |_) | | |_| | (_| | | | | \__ \
  //   | .__/|_|\__,_|\__, |_|_| |_|___/
  //   | |             __/ |
  //   |_|            |___/

  // Nuxt Build Modules
  buildModules: ['@nuxtjs/vuetify'],

  // Nuxt Modules
  modules: [
    ['storyblok-nuxt', { accessToken: TOKEN, cacheProvider: 'memory' }],
    ['@nuxtjs/markdownit'],
    ['@nuxtjs/pwa'],
    ['@nuxtjs/sitemap']
  ],

  // Plugins (Global component registration, filters, etc)
  plugins: [
    '~/plugins/components',
    '~/plugins/filters',
    { src: 'plugins/vue-typer.js', ssr: false },
    { src: 'plugins/vue-carousel-3d.js', ssr: false },
    { src: 'plugins/magicgrid.js', ssr: false }
  ],

  // Load SCSS
  css: ['@/assets/style/style.scss'],

  // Sitemap Config
  sitemap: {
    hostname: URL,
    gzip: true,
    exclude: ['/global']
  },

  // Google Analytics
  googleAnalytics: {
    id: ANALYTICS,
    dev: false
  },

  // Markdown-It Config
  markdownit: { injected: true },

  //                     _   _  __
  //                    | | (_)/ _|
  //   __   ___   _  ___| |_ _| |_ _   _
  //   \ \ / / | | |/ _ \ __| |  _| | | |
  //    \ V /| |_| |  __/ |_| | | | |_| |
  //     \_/  \__,_|\___|\__|_|_|  \__, |
  //                                __/ |
  //                               |___/

  // Vuetify Configuration
  vuetify: {
    customProperties: true,
    defaultAssets: {
      font: true,
      icons: 'mdi'
    },
    theme: {
      dark: DARK,
      themes: {
        light: {
          primary: PRIMARY_LIGHT
        },
        dark: {
          primary: PRIMARY_DARK
        }
      },
      options: {
        customProperties: true
      }
    }
  },

  //    _           _ _     _
  //   | |         (_) |   | |
  //   | |__  _   _ _| | __| |
  //   | '_ \| | | | | |/ _` |
  //   | |_) | |_| | | | (_| |
  //   |_.__/ \__,_|_|_|\__,_|
  //
  //

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
        .get(`https://api.storyblok.com/v1/cdn/spaces/me?token=${TOKEN}`)
        .then(space_res => {
          // timestamp of latest publish
          cache_version = space_res.data.space.version;

          // Call for all Links using the Links API: https://www.storyblok.com/docs/Delivery-Api/Links
          axios
            .get(
              `https://api.storyblok.com/v1/cdn/links?token=${TOKEN}&version=${version}&cv=${cache_version}`
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

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
const NAME = process.env.NAME;
const URL = process.env.URL;
const FAVICON = process.env.FAVICON;
const ICON = process.env.ICON;
const IOS_ICON = process.env.IOS_ICON;
const GOOGLE = process.env.GOOGLE;
const BING = process.env.BING;

//// Theme
const THEME = process.env.THEME;
const PRIMARY_LIGHT = process.env.PRIMARY_LIGHT;
const PRIMARY_DARK = process.env.PRIMARY_DARK;
const SECONDARY_LIGHT = process.env.SECONDARY_LIGHT;
const SECONDARY_DARK = process.env.SECONDARY_DARK;
const PROGRESS_BAR = process.env.PROGRESS_BAR;
const PWA_THEME = process.env.PWA_THEME; // Use nav color;

/////////////////////////////
// NUXT CONFIG STARTS HERE //
/////////////////////////////

module.exports = {
  mode: 'universal', // Enable server-side rendering
  env: { token: TOKEN, theme: THEME },

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
  loading: { color: PROGRESS_BAR ? PROGRESS_BAR : '#fff' },

  // Custom Site Meta (i.e. favicons)
  head: {
    meta: [{ name: 'msvalidate.01', content: BING }],
    // link: [
    //   {
    //     rel: 'apple-touch-icon',
    //     href: IOS_ICON ? IOS_ICON : '/icon.png'
    //   }
    // ],
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
    id: GOOGLE,
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
      dark: THEME === 'dark' || THEME === 'auto' ? true : false,
      themes: {
        light: {
          primary: PRIMARY_LIGHT,
          secondary: SECONDARY_LIGHT
        },
        dark: {
          primary: PRIMARY_DARK,
          secondary: SECONDARY_DARK
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

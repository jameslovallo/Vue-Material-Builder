const pkg = require('./package')
const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin')

module.exports = {
  mode: 'universal',

  /*
   ** Headers of the page
   */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://use.fontawesome.com/releases/v5.0.13/css/all.css'
      }
    ]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },

  /*
   ** Global CSS
   */
  css: ['~/assets/style/app.styl'],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['~/plugins/components', '~/plugins/filters', '@/plugins/vuetify'],

  /*
   ** Nuxt.js modules
   */
  modules: [
    [
      'storyblok-nuxt',
      { accessToken: 'LzfbLRAF56JNFMkGiOxx0gtt', cacheProvider: 'memory' }
      // { accessToken: 'lQVIeSpv6rmkjm63jCBqVwtt', cacheProvider: 'memory' }
    ],
    ['@nuxtjs/markdownit']
  ],

  markdownit: { injected: true },

  /*
   ** Router middleware
   */
  router: {
    middleware: 'setCacheVersion'
  },

  /*
   ** Build configuration
   */
  build: {
    transpile: ['vuetify/lib'],
    plugins: [new VuetifyLoaderPlugin()],

    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}

const SiteName = "VuetiBlok Template"
const pkg = require('./package')
const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin')
const axios = require('axios')
const token = 'lQVIeSpv6rmkjm63jCBqVwtt'

module.exports = {
  mode: 'universal',

  /*
   ** Headers of the page
   */
  head: {
    title: SiteName,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://use.fontawesome.com/releases/v5.8.1/css/all.css'
      },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900|Roboto+Mono'
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
  css: ['@/assets/style/app.styl'],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '~/plugins/components',
    '~/plugins/filters',
    '@/plugins/vuetify',
    '~/plugins/masonry',
    { src: 'plugins/vue-typer.js', ssr: false }
  ],

  /*
   ** Nuxt.js modules
   */
  modules: [
    ['storyblok-nuxt', { accessToken: token, cacheProvider: 'memory' }],
    ['@nuxtjs/markdownit'],
    ['@nuxtjs/pwa']
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
    extractCSS: true,
    transpile: ['vuetify/lib'],
    plugins: [new VuetifyLoaderPlugin()],
    loaders: {
      stylus: {
        import: ['~assets/style/variables.styl']
      }
    },

    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) { }
  },

  generate: {
    routes: function (callback) {
      const version = 'published'
      let cache_version = 0

      // other routes that are not in Storyblok with their slug.
      let routes = ['/', '/home']

      // Load space and receive latest cache version key to improve performance
      axios
        .get(`https://api.storyblok.com/v1/cdn/spaces/me?token=${token}`)
        .then(space_res => {
          // timestamp of latest publish
          cache_version = space_res.data.space.version

          // Call for all Links using the Links API: https://www.storyblok.com/docs/Delivery-Api/Links
          axios
            .get(
              `https://api.storyblok.com/v1/cdn/links?token=${token}&version=${version}&cv=${cache_version}`
            )
            .then(res => {
              Object.keys(res.data.links).forEach(key => {
                if (res.data.links[key].slug != 'home') {
                  routes.push('/' + res.data.links[key].slug)
                }
              })

              callback(null, routes)
            })
        })
    }
  }
}

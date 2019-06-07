import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import '@mdi/font/css/materialdesignicons.css'
import colors from 'vuetify/es5/util/colors'

Vue.use(Vuetify, {
  theme: {
    primary: colors.blue.accent3,
    accent: colors.grey.darken3,
    secondary: colors.pink.darken1,
    info: colors.blue,
    warning: colors.amber,
    error: colors.red.accent2,
    success: colors.green
  },
  iconfont: 'mdi',
  options: { customProperties: true }
})

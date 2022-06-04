// started time 05.05.2022
require('dotenv').config({
  path: './config/config.env',
})
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  server: {
    host: process.env.HOST || 'localhost',
    port: process.env.PORT || 3001,
  },
  head: {
    title: 'tek',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    { src: '~/assets/scss/main.css' }
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/v-dropdown-menu' },
    { src: '~/plugins/vue-awesome-swiper' },
    { src: '~/plugins/v-click-outside' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],
  moment: {
    defaultLocale: 'tm',
    locales: ['ru', 'tm'],
  },
  publicRuntimeConfig:{
    url:process.env.SERVER_URL || 'http://localhost:3000'
  },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    'cookie-universal-nuxt',
    '@nuxtjs/toast',
    [
      '@nuxtjs/i18n',
      {
        strategy: 'no_prefix',
        locales: [
          {
            code: 'tm',
            file: 'tm-TM.js',
            name: 'Türkmen',
          },
          {
            code: 'ru',
            file: 'ru-RU.js',
            name: 'Русский',
          },
        ],
        lazy: true,
        langDir: 'lang/',
        defaultLocale: 'tm',
      },
    ],
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: process.env.SERVER_URL || 'http://localhost:5000',
  },
  toast: {
    position: 'top-center',
    duration: 5000,
    className:['toast'],
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    loaders:{
      sass:{
        implementation:require('sass'),
      },
      scss:{
        implementation:require('sass'),
      }
    }
  }
}

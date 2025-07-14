let development = process.env.NODE_ENV !== 'production'
let base = development ? '/' : '/crossing-collection/'
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Crossing Collection',
    htmlAttrs: {
      lang: 'en'
    },

    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: ''},
      {name: 'format-detection', content: 'telephone=no'}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
      {rel: "apple-touch-icon", sizes: "57x57", href: base + "img/favicon/apple-icon-57x57.png"},
      {rel: "apple-touch-icon", sizes: "60x60", href: base + "img/favicon/apple-icon-60x60.png"},
      {rel: "apple-touch-icon", sizes: "72x72", href: base + "img/favicon/apple-icon-72x72.png"},
      {rel: "apple-touch-icon", sizes: "76x76", href: base + "img/favicon/apple-icon-76x76.png"},
      {rel: "apple-touch-icon", sizes: "114x114", href: base + "img/favicon/apple-icon-114x114.png"},
      {rel: "apple-touch-icon", sizes: "120x120", href: base + "img/favicon/apple-icon-120x120.png"},
      {rel: "apple-touch-icon", sizes: "144x144", href: base + "img/favicon/apple-icon-144x144.png"},
      {rel: "apple-touch-icon", sizes: "152x152", href: base + "img/favicon/apple-icon-152x152.png"},
      {rel: "apple-touch-icon", sizes: "180x180", href: base + "img/favicon/apple-icon-180x180.png"},
      {rel: "icon", type: "image/png", sizes: "192x192", href: base + "img/favicon/android-icon-192x192.png"},
      {rel: "icon", type: "image/png", sizes: "32x32", href: base + "img/favicon/favicon-32x32.png"},
      {rel: "icon", type: "image/png", sizes: "96x96", href: base + "img/favicon/favicon-96x96.png"},
      {rel: "icon", type: "image/png", sizes: "16x16", href: base + "img/favicon/favicon-16x16.png"}
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/stylesheets/style.css',
    'swiper/css/swiper.css'
  ],


  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
   {src: '~/plugins/swiper.js', mode: 'client'}
    //{src: '~/plugins/swiper-client.js'}
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/'
  },
  //target: 'static',
  router: {
    base
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ['vue-awesome-swiper']
  }
}

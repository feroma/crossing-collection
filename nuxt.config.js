let development = process.env.NODE_ENV !== 'production'
let base = development ? '/' : '/crossing-collection/'
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Crossing Collection - Luxury Hotels, Villas & Yacht Experiences in Italy',
    htmlAttrs: {
      lang: 'en'
    },

    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Discover Crossing Collection: exclusive boutique hotels in Milan and Rome, luxury villa in Sicily, and premium yacht experiences in the Mediterranean. Authentic Italian hospitality and design.'
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content: 'luxury hotels Italy, boutique hotels Milan Rome, Sicily villa rental, Mediterranean yacht charter, Italian hospitality, luxury travel Italy, Crossing Manzoni, Crossing Condotti, Crossing The Rock, Crossing The Sea'
      },
      { name: 'author', content: 'Crossing Collection' },
      { name: 'robots', content: 'index, follow' },
      { name: 'format-detection', content: 'telephone=no' },

      // Open Graph
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:title', property: 'og:title', content: 'Crossing Collection - Luxury Hotels, Villas & Yacht Experiences in Italy' },
      { hid: 'og:description', property: 'og:description', content: 'Discover Crossing Collection: exclusive boutique hotels in Milan and Rome, luxury villa in Sicily, and premium yacht experiences in the Mediterranean.' },
      { hid: 'og:image', property: 'og:image', content: 'https://www.stage72.info/crossing-collection/repo/crossing_collection.jpg' },
      { hid: 'og:image:width', property: 'og:image:width', content: '1200' },
      { hid: 'og:image:height', property: 'og:image:height', content: '630' },
      { hid: 'og:image:alt', property: 'og:image:alt', content: 'Crossing Collection luxury accommodations across Italy' },
      { hid: 'og:url', property: 'og:url', content: 'https://www.crossingcollection.com' },
      { hid: 'og:site_name', property: 'og:site_name', content: 'Crossing Collection' },
      { hid: 'og:locale', property: 'og:locale', content: 'en_US' },
      { hid: 'og:locale:alternate', property: 'og:locale:alternate', content: 'it_IT' },

      // Twitter Card
      { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
      { hid: 'twitter:title', name: 'twitter:title', content: 'Crossing Collection - Luxury Hotels, Villas & Yacht Experiences in Italy' },
      { hid: 'twitter:description', name: 'twitter:description', content: 'Discover Crossing Collection: exclusive boutique hotels in Milan and Rome, luxury villa in Sicily, and premium yacht experiences in the Mediterranean.' },
      { hid: 'twitter:image', name: 'twitter:image', content: 'https://www.stage72.info/crossing-collection/repo/crossing_collection.jpg' },
      { hid: 'twitter:image:alt', name: 'twitter:image:alt', content: 'Crossing Collection luxury accommodations across Italy' },

      // Additional SEO
      { name: 'theme-color', content: '#2c3e50' },
      { name: 'msapplication-TileColor', content: '#2c3e50' },
      { name: 'application-name', content: 'Crossing Collection' },
      { name: 'apple-mobile-web-app-title', content: 'Crossing Collection' },
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },

      // Geo tags
      { name: 'geo.region', content: 'IT' },
      { name: 'geo.placename', content: 'Italy' },
      { name: 'ICBM', content: '41.9028, 12.4964' }, // Rome coordinates

      // Business/Schema hints
      { name: 'business:contact_data:country_name', content: 'Italy' }
    ],
    link: [
      { rel: 'canonical', href: 'https://www.crossingcollection.com' },
      { rel: 'alternate', hreflang: 'en', href: 'https://www.crossingcollection.com' },
      { rel: 'alternate', hreflang: 'x-default', href: 'https://www.crossingcollection.com' },
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

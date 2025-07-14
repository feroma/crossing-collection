import Vue from 'vue'

if (process.client) {
  const VueAwesomeSwiper = require('vue-awesome-swiper')
  require('swiper/css/swiper.css')

  Vue.use(VueAwesomeSwiper)
}

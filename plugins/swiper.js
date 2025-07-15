import Vue from 'vue'

// Importa solo quando siamo nel browser
if (process.client) {
  const VueAwesomeSwiper = require('vue-awesome-swiper')

  // Prova prima questo path per CSS
  try {
    require('swiper/dist/css/swiper.css')
  } catch (e) {
    // Se non funziona, prova questo
    try {
      require('swiper/css/swiper.css')
    } catch (e2) {
      console.warn('Could not load Swiper CSS')
    }
  }

  Vue.use(VueAwesomeSwiper)
}

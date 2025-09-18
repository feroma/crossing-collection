<template>
  <section id="press" class="press-section no-min-h">
    <div class="container bg-yellow">
      <div class="rounded-box">
        <h2 class="section-title d-block text-center sans tbase text-uppercase _border-title"
            v-html="data.title"/>

        <!-- Press Carousel -->
        <div class="press-carousel-container">
          <client-only>
            <template>
              <div v-if="mounted">
                <swiper
                  :options="swiperOptions"
                  class="press-carousel"
                  ref="pressSwiper"
                >
                  <swiper-slide
                    v-for="(publication, index) in pressPublications"
                    :key="publication.name + index"
                    class="press-slide"
                  >
                    <!-- Rimosso @click.stop="openPressModal(index)" -->
                    <a :href="publication.article" class="press-link" style="cursor: pointer"
                       :data-article-id="index">
                      <img
                        :data-article-id="index"
                        :src="publication.logo"
                        :alt="publication.name"
                        :title="publication.name"
                        class="press-logo"
                      />
                    </a>
                  </swiper-slide>
                </swiper>

                <!-- Navigation Arrows -->
                <div class="press-carousel-prev carousel-arrow carousel-arrow-prev arrow-link">
                <span class="icon">
                   <arrow-left/>
                </span>
                </div>
                <div class="press-carousel-next carousel-arrow carousel-arrow-next arrow-link">
                 <span class="icon">
                    <arrow-right/>
                 </span>
                </div>
              </div>
            </template>

            <!-- Placeholder durante il loading -->
            <template #placeholder>
              <div class="press-placeholder">
                <div class="placeholder-slides">
                  <div
                    v-for="(publication, index) in pressPublications.slice(0, 3)"
                    :key="'placeholder-' + index"
                    class="placeholder-slide press-slide"
                  >
                    <div class="press-link">
                      <img
                        :src="publication.logo"
                        :alt="publication.name"
                        :title="publication.name"
                        class="press-logo"
                      />
                    </div>
                  </div>
                </div>

                <!-- Placeholder arrows -->
                <div class="press-carousel-prev carousel-arrow carousel-arrow-prev arrow-link placeholder-arrow">
                <span class="icon">
                   <arrow-left/>
                </span>
                </div>
                <div class="press-carousel-next carousel-arrow carousel-arrow-next arrow-link placeholder-arrow">
                 <span class="icon">
                    <arrow-right/>
                 </span>
                </div>
              </div>
            </template>
          </client-only>
        </div>
      </div>

    </div>
  </section>
</template>

<script>
import ArrowLeft from "~/components/ArrowLeft.vue"
import ArrowRight from "~/components/ArrowRight.vue"
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'PressSection',
  components: {
    ArrowRight,
    ArrowLeft
  },
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  computed: {
    ...mapGetters([
      'isModalOpen',
    ]),
    pressPublications() {
      return this.$store.getters.allPress
    }
  },
  methods: {
    ...mapActions([
      'openModal','setModalArticle',
    ]),

    openPressModal(index) {
      console.log('Opening modal for index:', index);
      console.log('Article object:', this.pressPublications[index]);

      this.setModalArticle(this.pressPublications[index]);

      this.$nextTick(() => {
        setTimeout(() => {
          this.openModal()
        }, 100)
      })
    },

    initSwiper() {
      if (this.$refs.pressSwiper && this.$refs.pressSwiper.$swiper) {
        console.log('Press Swiper initialized and updated')
        this.$refs.pressSwiper.$swiper.update()
        this.$refs.pressSwiper.$swiper.navigation.update()

        // Aggiungi i click handlers dopo l'inizializzazione
        setTimeout(() => {
          this.attachClickHandlers()
        }, 200) // Aspetta un po' per essere sicuri che tutto sia renderizzato
      }
    },

    attachClickHandlers() {
      // Rimuovi eventuali listener precedenti per evitare duplicati
      this.removeClickHandlers()

      const swiperContainer = this.$refs.pressSwiper?.$el
      if (!swiperContainer) {
        console.warn('Swiper container not found')
        return
      }

      // METODO 1: Event Delegation (RACCOMANDATO)
      this.clickHandler = (event) => {
        const pressLink = event.target.closest('.press-link')
        if (pressLink) {
          event.preventDefault() // Previeni la navigazione del link

          const articleId = pressLink.getAttribute('data-article-id')
          if (articleId !== null) {
            const index = parseInt(articleId, 10)
            console.log('Clicked on article with ID:', index)
            this.openPressModal(index)
          }
        }
      }

      // Aggiungi l'event listener al contenitore swiper
      swiperContainer.addEventListener('click', this.clickHandler)
      console.log('Click handlers attached to swiper container')

      // METODO 2: Listener individuali (ALTERNATIVO)
      // Decommentare questo blocco se preferisci listener individuali
      /*
      const pressLinks = swiperContainer.querySelectorAll('.press-link')
      console.log('Found press links:', pressLinks.length)

      pressLinks.forEach((link) => {
        const articleId = link.getAttribute('data-article-id')
        if (articleId !== null) {
          const index = parseInt(articleId, 10)

          const clickHandler = (event) => {
            event.preventDefault()
            console.log('Individual click handler for index:', index)
            this.openPressModal(index)
          }

          link.addEventListener('click', clickHandler)
          // Salva il riferimento per rimuoverlo dopo
          link._clickHandler = clickHandler
        }
      })
      */
    },

    removeClickHandlers() {
      const swiperContainer = this.$refs.pressSwiper?.$el
      if (swiperContainer && this.clickHandler) {
        swiperContainer.removeEventListener('click', this.clickHandler)
        this.clickHandler = null
        console.log('Previous click handlers removed')
      }

      // Se usi il METODO 2, decommentare questo:
      /*
      const pressLinks = swiperContainer?.querySelectorAll('.press-link') || []
      pressLinks.forEach((link) => {
        if (link._clickHandler) {
          link.removeEventListener('click', link._clickHandler)
          link._clickHandler = null
        }
      })
      */
    }
  },

  data() {
    return {
      mounted: false,
      clickHandler: null, // Riferimento al click handler per poterlo rimuovere
      swiperOptions: {
        slidesPerView: 'auto',
        spaceBetween: 30,
        centeredSlides: true,
        loop: true,
        navigation: {
          nextEl: '.press-carousel-next',
          prevEl: '.press-carousel-prev',
        },
        breakpoints: {
          320: {
            slidesPerView: 'auto',
            spaceBetween: 20,
            centeredSlides: true,
          },
          1024: {
            slidesPerView: 'auto',
            spaceBetween: 40,
            centeredSlides: true,
          }
        }
      }
    }
  },

  mounted() {
    this.$nextTick(() => {
      this.mounted = true
      this.$nextTick(() => {
        setTimeout(() => {
          this.initSwiper()
        }, 100)
      })
    })
  },

  beforeDestroy() {
    // Pulisci i listener quando il componente viene distrutto
    this.removeClickHandlers()
  }
}
</script>

<style scoped>
/* Placeholder styles per evitare layout shift */
.press-placeholder {
  position: relative;
  width: 100%;
  overflow: hidden;
}

.placeholder-slides {
  display: flex;
  gap: 30px;
  justify-content: center;
}

.placeholder-slide {
  flex: 0 0 auto;
  opacity: 0.7;
}

.placeholder-arrow {
  opacity: 0.5;
  pointer-events: none;
}

/* Stili per i slide della stampa */
@media (max-width: 1023px) {
  .press-slide {

  }
}

@media (min-width: 1024px) {
  .press-slide {

  }
}
</style>

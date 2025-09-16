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
                    <div class="press-link" style="cursor: pointer"
                         :data-article-id="index"
                         @click.stop="openPressModal(index)">
                      <img
                        :src="publication.logo"
                        :alt="publication.name"
                        :title="publication.name"
                        class="press-logo"
                      />
                    </div>
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
      console.log(this.pressPublications[index]);
      this.setModalArticle(this.pressPublications[index])
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
        // Forza l'aggiornamento della navigazione
        this.$refs.pressSwiper.$swiper.navigation.update()
      }
    }
  },

  data() {
    return {
      mounted: false,
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
          // Mobile - 1 logo principale + 50% di precedente e successivo
          320: {
            slidesPerView: 'auto',
            spaceBetween: 20,
            centeredSlides: true,
          },
          // Tablet orizzontale - 3 loghi + 50% di precedente e successivo
          1024: {
            slidesPerView: 'auto',
            spaceBetween: 40,
            centeredSlides: true,
          }
        }
      }
    }
  },
  mounted () {
    // Aspetta che il DOM sia completamente pronto
    this.$nextTick(() => {
      this.mounted = true
      // Aspetta che lo swiper sia renderizzato
      this.$nextTick(() => {
        setTimeout(() => {
          this.initSwiper()
        }, 100)
      })
    })
  },

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

/* Assicurati che lo swiper non causi problemi di layout */


/* Stili per i slide della stampa */


/* Mobile: 1 logo principale che occupa la maggior parte dello schermo */
@media (max-width: 1023px) {
  .press-slide {

  }
}

/* Tablet e desktop: 3 loghi visibili */
@media (min-width: 1024px) {
  .press-slide {

  }
}





</style>

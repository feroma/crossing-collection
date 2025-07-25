<template>
  <section id="art-design" class="art-design-section">
    <div class="container bg-teal position-relative">

      <div class="flower flower-1"></div>
      <div class="flower flower-2"></div>
      <art-logo :data="data"/>
      <div class="row">
        <div class="col-sm-6 offset-sm-3">
          <div class="body" v-html="data.body"></div>
        </div>
      </div>
      <div class="row no-gutters align-items-center py-5">


        <div class="col-sm-12 col-md-3 d-flex justify-content-center">
          <div class="arrow-link my-3">
            <span class="label sans">Scroll to see</span>
            <span class="icon">
              <arrow-right/>
            </span>
          </div>
        </div>
        <!--    ==================   MOBILE-->
        <div class="d-md-none">

          <div class="scroll-gallery">
            <div class="content">
              <div
                v-for="(item,index) in data.gallery"
                :key="'art-gallery-sm-'+index"
                class="art-slide-sm"
              >
                <picture-wrapper class="mb-3" :image="item"/>
                <p>{{ item.alt }}</p>
              </div>
            </div>
          </div>
        </div>


        <!--    ==================   DESKTOP -->
        <div class="col-md-9 d-none d-md-block">
          <!-- Wrapper per evitare problemi di hydration -->
          <client-only>
            <template>
              <div v-if="mounted">
                <swiper
                  :options="swiperOptions"
                  ref="artSwiper"
                  class="art-carousel"
                >
                  <swiper-slide
                    v-for="(item,index) in data.gallery"
                    :key="'art-gallery-'+index"
                    class="art-slide"
                  >
                    <picture-wrapper :image="item"/>
                    <p>{{ item.alt }}</p>
                  </swiper-slide>
                </swiper>

                <!-- Pagination Dots -->
                <div class="art-carousel-pagination carousel-pagination"></div>
              </div>
            </template>

            <!-- Placeholder durante il loading -->
            <template #placeholder>
              <div class="swiper-placeholder">
                <div class="placeholder-slides">
                  <div
                    v-for="(item,index) in data.gallery.slice(0, 3)"
                    :key="'placeholder-'+index"
                    class="placeholder-slide"
                  >
                    <picture-wrapper :image="item"/>
                    <p>{{ item.alt }}</p>
                  </div>
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
import ArrowRight from "~/components/ArrowRight.vue"
import PictureWrapper from "~/components/PictureWrapper.vue"
import ArtLogo from "~/components/ArtLogo.vue"

export default {
  name: 'ArtDesignSection',
  components: {
    ArtLogo,
    PictureWrapper,
    ArrowRight
  },
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      mounted: false,
      swiperOptions: {
        slidesPerView: 'auto',
        spaceBetween: 20,
        centeredSlides: false,
        freeMode: true,
        loop: false,
        pagination: {
          el: '.art-carousel-pagination',
          clickable: true,
          type: 'bullets',
          dynamicMainBullets: 5
        },
        breakpoints: {
          320: {
            slidesPerView: 'auto',
            spaceBetween: 15,
            freeMode: true
          },
          768: {
            slidesPerView: 'auto',
            spaceBetween: 15,
            freeMode: true
          },
          992: {
            slidesPerView: 'auto',
            spaceBetween: 15,
            freeMode: true
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
        }, 2000)
      })
    })
  },
  methods: {
    initSwiper() {
      if (this.$refs.artSwiper && this.$refs.artSwiper.$swiper) {
        console.log('Swiper initialized and updated')
        this.$refs.artSwiper.$swiper.update()
        this.$refs.artSwiper.$swiper.pagination.update()
      }
    }
  }
}
</script>

<style scoped>
/* Stili per il ticker delle immagini art & design */

/* Placeholder styles per evitare layout shift */
.swiper-placeholder {
  width: 100%;
  overflow: hidden;
}

.placeholder-slides {
  display: flex;
  gap: 20px;
}

.placeholder-slide {
  flex: 0 0 auto;
  opacity: 0.7;
}

/* Assicurati che lo swiper non causi problemi di layout */
.art-carousel {
  width: 100%;
}
</style>

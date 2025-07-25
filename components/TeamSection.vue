<template>
  <section id="team" class="team-section">
    <div class="container bg-yellow">
      <h2 class="text-center section-title t1b" v-html="data.title"></h2>

      <!-- Team Carousel -->
      <div class="team-carousel-container">
        <client-only>
          <template>
            <div v-if="mounted">
              <swiper
                :options="swiperOptions"
                class="team-carousel"
                ref="teamSwiper"
              >
                <swiper-slide
                  v-for="(person,index) in data.staff"
                  :key="person.name+index"
                  class="team-slide"
                >
                  <div class="staff-member">
                    <p class="staff-description t5">{{ person.description }}</p>
                    <div class="staff-header">
                      <img
                        :src="person.icon"
                        class="icon"
                      />
                      <div>
                        <h3 class="t3 staff-name serif text-italic mb-1">{{ person.name }}</h3>
                        <p class="staff-role">{{ person.role }}</p>
                      </div>

                    </div>
                  </div>
                </swiper-slide>
              </swiper>

              <!-- Navigation Arrows -->
              <div class="team-carousel-prev carousel-arrow carousel-arrow-prev arrow-link">
                <span class="icon">
                   <arrow-left/>
                </span>
              </div>
              <div class="team-carousel-next carousel-arrow carousel-arrow-next arrow-link">
                 <span class="icon">
                    <arrow-right/>
                 </span>
              </div>
            </div>
          </template>

          <!-- Placeholder durante il loading -->
          <template #placeholder>
            <div class="team-placeholder">
              <div class="placeholder-slides">
                <div
                  v-for="(person,index) in data.staff.slice(0, 2)"
                  :key="'placeholder-'+index"
                  class="placeholder-slide team-slide"
                >
                  <div class="staff-member">
                    <p class="staff-description t5">{{ person.description }}</p>
                    <div class="staff-header">
                      <img
                        :src="person.icon"
                        class="icon"
                      />
                      <div>
                        <h3 class="staff-name serif text-italic mb-0">{{ person.name }}</h3>
                        <p class="staff-role">{{ person.role }}</p>
                      </div>

                    </div>
                  </div>
                </div>
              </div>

              <!-- Placeholder arrows -->
              <div class="team-carousel-prev carousel-arrow carousel-arrow-prev arrow-link placeholder-arrow">
                <span class="icon">
                   <arrow-left/>
                </span>
              </div>
              <div class="team-carousel-next carousel-arrow carousel-arrow-next arrow-link placeholder-arrow">
                 <span class="icon">
                    <arrow-right/>
                 </span>
              </div>
            </div>
          </template>
        </client-only>
      </div>
    </div>
  </section>
</template>

<script>
import ArrowLeft from "~/components/ArrowLeft.vue"
import ArrowRight from "~/components/ArrowRight.vue"

export default {
  name: 'TeamSection',
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
  data() {
    return {
      mounted: false,
      swiperOptions: {
        slidesPerView: 'auto',
        spaceBetween: 30,
        centeredSlides: true,
        loop: true,
        navigation: {
          nextEl: '.team-carousel-next',
          prevEl: '.team-carousel-prev',
        },
        breakpoints: {
          // Mobile - solo 1 slide visibile
          320: {
            slidesPerView: 1,
            spaceBetween: 15,
            centeredSlides: true,
          },
          // Tablet - auto width con larghezza minima
          1024: {
            slidesPerView: 'auto',
            spaceBetween: 30,
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
  methods: {
    initSwiper() {
      if (this.$refs.teamSwiper && this.$refs.teamSwiper.$swiper) {
        console.log('Team Swiper initialized and updated')
        this.$refs.teamSwiper.$swiper.update()
        // Forza l'aggiornamento della navigazione
        this.$refs.teamSwiper.$swiper.navigation.update()
      }
    }
  }
}
</script>

<style scoped>
/* Placeholder styles per evitare layout shift */
.team-placeholder {
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
.team-carousel {
  width: 100%;
}
</style>

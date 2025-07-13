<template>
  <section id="team" class="team-section">
    <div class="container">
      <h2 class="section-title">{{ data.title }}</h2>

      <!-- Team Carousel -->
      <div class="team-carousel-container">
        <swiper
          :options="swiperOptions"
          class="team-carousel"
        >
          <swiper-slide
            v-for="(person,index) in data.staff"
            :key="person.name+index"
            class="team-slide"
          >
            <div class="staff-member">
              <div class="staff-header">
                <h3 class="staff-name">{{ person.name }}</h3>
                <p class="staff-role">{{ person.role }}</p>
              </div>

              <p class="staff-description">{{ person.description }}</p>
            </div>
          </swiper-slide>
        </swiper>

        <!-- Navigation Arrows -->
        <div class="team-carousel-prev carousel-arrow carousel-arrow-prev">
         <arrow-left/>
        </div>
        <div class="team-carousel-next carousel-arrow carousel-arrow-next">
         <arrow-right/>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ArrowLeft from "~/components/ArrowLeft.vue"
import ArrowRight from "~/components/ArrowRight.vue"

export default {
  name: 'TeamSection',
  components: {ArrowRight, ArrowLeft},
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
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
            spaceBetween: 20,
            centeredSlides: false,
          },
          // Tablet - auto width con larghezza minima
          768: {
            slidesPerView: 'auto',
            spaceBetween: 30,
            centeredSlides: true,
          }
        }
      }
    }
  }
}
</script>

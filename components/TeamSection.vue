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
          <!-- noinspection HtmlUnknownTag -->
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
          <svg viewBox="0 0 24 24" width="24" height="24">
            <path fill="currentColor" d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
          </svg>
        </div>
        <div class="team-carousel-next carousel-arrow carousel-arrow-next">
          <svg viewBox="0 0 24 24" width="24" height="24">
            <path fill="currentColor" d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
          </svg>
        </div>

        <!-- Pagination Dots -->
        <div class="team-carousel-pagination carousel-pagination"></div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'TeamSection',
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      swiperOptions: {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        navigation: {
          nextEl: '.team-carousel-next',
          prevEl: '.team-carousel-prev',
        },
        // pagination: {
        //   el: '.team-carousel-pagination',
        //   clickable: true,
        // },
      }
    }
  }
}
</script>

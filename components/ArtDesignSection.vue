<template>
  <section id="art-design" class="art-design-section">
    <div class="container bg-teal">

      <art-logo :data="data"/>
      <div class="row">
        <div class="col-sm-6 offset-sm-3">
          <div class="body" v-html="data.body"></div>
        </div>
      </div>
      <div class="row no-gutters align-items-center py-5">
        <div class="col-sm-3">
          <p class="arrow-link">
            <span class="label sans">Scroll to see</span>
            <span class="icon">
              <arrow-right/>
            </span>
          </p>
        </div>
        <div class="col-sm-9">
          <swiper :options="swiperOptions"
                  class="art-carousel">
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
  components: {ArtLogo, PictureWrapper, ArrowRight},
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
        spaceBetween: 20,
        centeredSlides: false,
        freeMode: true,
        loop: false,
        pagination: {
          el: '.art-carousel-pagination',
          clickable: true,
        },
        breakpoints: {
          // Mobile - mostra quanto possibile
          320: {
            slidesPerView: 'auto',
            spaceBetween: 15,
            freeMode: true,
          },
          // Tablet e desktop - ticker completo
          768: {
            slidesPerView: 'auto',
            spaceBetween: 15,
            freeMode: true,
          },
          992: {
            slidesPerView: 'auto',
            spaceBetween: 15,
            freeMode: true,
          }
        }
      }
    }
  }
}
</script>

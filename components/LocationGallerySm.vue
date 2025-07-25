<template>


  <div class="location">
    <div class="bg"></div>
    <div class="position-relative" style="z-index: 2">
      <location-card class="padding-resp" :index="index" :location="location"/>

      <div class="scroll-gallery">
        <div class="content">
          <div
            v-for="(item, index) in location.gallery"
            :key="'location-'+index"
            class="art-slide-sm"
          >
            <picture-wrapper  :image="item"/>

          </div>

<!--          <picture-wrapper-->
<!--            v-for="(item, index) in location.gallery"-->
<!--            :key="'location-'+index"-->
<!--            :image="item"-->
<!--            :index="index"-->
<!--          />-->
        </div>
      </div>
    </div>

  </div>


</template>

<script>
import ArrowRight from "~/components/ArrowRight.vue"
import PictureWrapper from "~/components/PictureWrapper.vue"
import LocationCard from "~/components/LocationCard.vue"
import LocationGallery from "~/components/LocationGallery.vue"

export default {
  name: 'LocationGallerySm',
  components: {LocationGallery, LocationCard, PictureWrapper, ArrowRight},
  props: {
    location: {
      type: Object,
      required: true
    },
    index: {
      type: Number,
      required: true
    }
  }
}
</script>

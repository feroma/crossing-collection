<template>


  <div class="location">
<!--    <h1>{{location.gallery.length}}</h1>-->

    <div class="row" v-if="location.gallery.length<=4">
      <div class="col-sm-6">
        <location-card class="padding-resp" :index="index" :location="location"/>

        <picture-wrapper :image="location.gallery[1]"/>
        <picture-wrapper class="padding-resp"  :image="location.gallery[3]"/>
      </div>
      <div class="col-sm-6">
        <picture-wrapper :image="location.gallery[0]"/>
        <picture-wrapper :image="location.gallery[2]"/>
      </div>
    </div>

    <div class="row" v-else>
      <div class="col-12">
        <div class="row">
          <div class="col-sm-12">
            <location-card class="padding-resp" :index="index" :location="location"/>
          </div>
          <div class="col-sm-10 offset-sm-2 text-right">
            <picture-wrapper :image="location.gallery[0]"/>
          </div>
        </div>

        <div class="row align-items-center">

          <div class="col-sm-6">
            <picture-wrapper class="padding-resp-2"  :image="location.gallery[1]"/>
          </div>
          <div class="col-sm-6">
            <picture-wrapper   :image="location.gallery[2]"/>
          </div>
        </div>
        <div class="row align-items-center">
          <div class="col-sm-6">
            <picture-wrapper  :image="location.gallery[3]"/>
          </div>
          <div class="col-sm-6">
            <picture-wrapper class="padding-resp-2"  :image="location.gallery[4]"/>
          </div>
        </div>
      </div>


    </div>

  </div>




</template>

<script>
import ArrowRight from "~/components/ArrowRight.vue"
import PictureWrapper from "~/components/PictureWrapper.vue"
import LocationCard from "~/components/LocationCard.vue"

export default {
  name: 'LocationGallery',
  components: {LocationCard, PictureWrapper, ArrowRight},
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

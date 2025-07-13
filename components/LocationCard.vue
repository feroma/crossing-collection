<script>
import {defineComponent} from 'vue'
import ArrowRight from "~/components/ArrowRight.vue"
import PictureWrapper from "~/components/PictureWrapper.vue"

export default {
  name: "LocationCard",
  components: {PictureWrapper, ArrowRight},
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


<template>
  <div class="location-card">
    <div class="location-header">
      <span class="location-number serif text-italic t2">0{{ (index + 1) }}</span>
      <h3 class="location-name text-uppercase mb-0 t3">{{ location.name }}</h3>
      <span class="location-type t3">{{ location.description }}</span>
    </div>

    <div class="location-info">

      <a
        :href="location.website"
        target="_blank"
        rel="noopener noreferrer"
        class="location-website arrow-link arrow-link-alt"
      >
        <span class="label">{{ location.location }}</span>
        <span class="icon"><arrow-right/></span>
      </a>
    </div>
  </div>
</template>

<style scoped>

</style>

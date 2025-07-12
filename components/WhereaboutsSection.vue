<template>
  <section id="whereabouts" class="whereabouts-section">
    <div class="container">
      <h2 class="section-title">{{ data.title }}</h2>

      <div class="body" v-html="data.body"></div>

      <!-- Locations Gallery -->
      <div class="locations-container">
        <LocationGallery
          v-for="location in allLocations"
          :key="location.name"
          :location="location"
        />
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import LocationGallery from '~/components/LocationGallery.vue'

export default {
  name: 'WhereaboutsSection',
  components: {
    LocationGallery
  },
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  computed: {
    ...mapGetters(['allLocations'])
  }
}
</script>

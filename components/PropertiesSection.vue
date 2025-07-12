<template>
  <section id="properties" class="properties-section">
    <div class="container">
      <h2 class="section-title">{{ data.title }}</h2>
      
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
  name: 'PropertiesSection',
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
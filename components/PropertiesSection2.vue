<template>

  <section id="properties-links" class="properties-section2 no-min-h">
    <div class="container">
      <h2 class="section-title d-block text-center sans tbase text-uppercase border-title">The Collection</h2>

      <div class="locations-list-2">
        <a class="location-link-big"
           v-for="(location,index) in allLocationsList"
           :key="'link-'+location.name"
           :class="'link'+index"

           :href="location.website"
           target="_blank"
           rel="noopener noreferrer"

        >

          <span class="location-title">
             <span class="t1b serif">{{ location.name }} &nbsp;</span>
          <span class="t1b serif text-italic">{{ location.location }}  &nbsp;</span>
          </span>

          <span class="location-link arrow-link">
                  <span class="label">Discover</span>
                  <span class="icon"><arrow-right/></span>
          </span>
        </a>
      </div>
    </div>


  </section>


</template>

<script>
import {mapGetters} from 'vuex'
import LocationGallery from '~/components/LocationGallery.vue'
import LocationLink from "~/components/LocationLink.vue"
import ArrowRight from "~/components/ArrowRight.vue"

export default {
  name: 'PropertiesSection',
  components: {
    ArrowRight,
    LocationLink,
    LocationGallery
  },
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  computed: {
    ...mapGetters(['allLocations', 'allLocationsList'])
  }
}
</script>

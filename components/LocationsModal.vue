<template>
  <div v-if="isLocationsModalOpen" class="modal-overlay" @click="closeModal">
    <div class="modal-content" @click.stop>
      <!-- Close button -->
      <button @click="closeModal" class="modal-close-btn">
        &times;
      </button>

      <!-- Modal title -->
      <div class="modal-header">
        <h2 class="modal-title">
          <em>Choose your</em><br>next stay
        </h2>
      </div>

      <!-- Locations list -->
      <div class="locations-list">
        <LocationLink
          v-for="location in allLocations"
          :key="location.name"
          :location="location"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import LocationLink from '~/components/LocationLink.vue'

export default {
  name: 'LocationsModal',
  components: {
    LocationLink
  },
  computed: {
    ...mapGetters([
      'isLocationsModalOpen',
      'allLocations'
    ])
  },
  methods: {
    ...mapActions([
      'closeLocationsModal'
    ]),

    closeModal() {
      this.closeLocationsModal()
    }
  },
  watch: {
    isLocationsModalOpen(newVal) {
      if (newVal) {
        // Modale aperta - aggiungi classe al body
        document.body.classList.add('modal-open')
      } else {
        // Modale chiusa - rimuovi classe dal body
        document.body.classList.remove('modal-open')
      }
    }
  },
  beforeDestroy() {
    // Cleanup: rimuovi la classe se il componente viene distrutto
    document.body.classList.remove('modal-open')
  }
}
</script>

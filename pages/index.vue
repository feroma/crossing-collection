<template>
  <div class="landing-page">
    <!-- Header con bottone locations -->
    <header class="header">
      <div class="container">
        <h1 class="site-title">{{ siteConfig.siteName }}</h1>
        <button @click="openLocationsModal" class="locations-btn">
          Locations
        </button>
      </div>
    </header>

    <!-- Modal delle locations -->
    <LocationsModal />

    <!-- Contenuto principale -->
    <main>
      <!-- Renderizza le sezioni -->
      <ConceptSection
        v-if="getSection('concept')"
        :data="getSection('concept').content"
      />

      <WhereaboutsSection
        v-if="getSection('whereabouts')"
        :data="getSection('whereabouts').content"
      />

      <PropertiesSection
        v-if="getSection('properties')"
        :data="getSection('properties').content"
      />

      <ArtDesignSection
        v-if="getSection('art-design')"
        :data="getSection('art-design').content"
      />

      <TeamSection
        v-if="getSection('team')"
        :data="getSection('team').content"
      />
    </main>

    <!-- Footer -->
    <footer class="footer">
      <div class="container">
        <p>&copy; 2025 {{ siteConfig.siteName }}. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import ConceptSection from '~/components/ConceptSection.vue'
import WhereaboutsSection from '~/components/WhereaboutsSection.vue'
import PropertiesSection from '~/components/PropertiesSection.vue'
import ArtDesignSection from '~/components/ArtDesignSection.vue'
import TeamSection from '~/components/TeamSection.vue'
import LocationsModal from '~/components/LocationsModal.vue'

export default {
  components: {
    ConceptSection,
    WhereaboutsSection,
    PropertiesSection,
    ArtDesignSection,
    TeamSection,
    LocationsModal
  },

  computed: {
    ...mapGetters([
      'siteConfig',
      'getSectionById'
    ])
  },

  methods: {
    ...mapActions([
      'openLocationsModal'
    ]),

    getSection(id) {
      return this.getSectionById(id)
    }
  }
}
</script>// Esempio di componente che utilizza lo store

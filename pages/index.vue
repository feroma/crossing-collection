<template>
  <div class="landing-page">
    <!-- Header con bottone locations -->
    <header class="header">
      <div class="container">

        <div class="main-menu">
          <div class="header-nav">
          <a
            href="#concept"
            @click="scrollToSection('concept', $event)"
            class="nav-link">
            Concept
          </a>
            <a
              href="#properties"
              @click="scrollToSection('properties', $event)"
              class="nav-link">
              Properties & Packages
            </a>
          </div>

          <h1 class="site-title"  @click="scrollToSection('welcome', $event)">
            <collection-logo/>
            <span>{{ siteConfig.siteName }}</span>
          </h1>
          <div class="header-nav">
            <a
              href="#art-design"
              @click="scrollToSection('art-design', $event)"
              class="nav-link">
             Art & Design
            </a>
            <a
              href="#team"
              @click="scrollToSection('team', $event)"
              class="nav-link">
              Our Team
            </a>
          </div>
        </div>

        <MenuIcon @click.native="toggleLocationsModal"
                  :class="isLocationsModalOpen?'is-open':''"
                  :is-open="isLocationsModalOpen"/>
      </div>
    </header>


    <!-- Modal delle locations -->
    <LocationsModal/>

    <!-- Contenuto principale -->
    <main>


      <section id="welcome" class="welcome-section">
        <div class="container">

          <picture>
            <source
              srcset="https://picsum.photos/1080/1920?random=1"
              media="(max-width: 768px)"
            >
            <img
              src="https://picsum.photos/1920/1080?random=1"
              alt="Welcome to Crossing Collection"
              class="fullimage"
              loading="lazy"
            >
          </picture>


          <h2 class="section-title t1 text-yellow">
            <em>Welcome to</em>&nbsp;Crossing
          </h2>
        </div>
      </section>

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
import {mapGetters, mapActions} from 'vuex'
import ConceptSection from '~/components/ConceptSection.vue'
import WhereaboutsSection from '~/components/WhereaboutsSection.vue'
import PropertiesSection from '~/components/PropertiesSection.vue'
import ArtDesignSection from '~/components/ArtDesignSection.vue'
import TeamSection from '~/components/TeamSection.vue'
import LocationsModal from '~/components/LocationsModal.vue'
import MenuIcon from '~/components/MenuIcon.vue'
import CollectionLogo from "~/components/CollectionLogo.vue"

export default {
  components: {
    CollectionLogo,
    ConceptSection,
    WhereaboutsSection,
    PropertiesSection,
    ArtDesignSection,
    TeamSection,
    LocationsModal,
    MenuIcon
  },

  computed: {
    ...mapGetters([
      'siteConfig',
      'getSectionById',
      'isLocationsModalOpen'
    ])
  },

  methods: {
    ...mapActions([
      'openLocationsModal',
      'toggleLocationsModal'
    ]),


    scrollToSection(sectionId, event) {
      // Previeni il comportamento default del link
      event.preventDefault()

      // Trova l'elemento target
      const targetElement = document.getElementById(sectionId)

      if (targetElement) {
        // Calcola l'offset per l'header fisso (se presente)
       // const headerHeight = document.querySelector('.header')?.offsetHeight || 0
        const elementPosition = targetElement.offsetTop // 20px di padding extra

        // Scroll smooth
        window.scrollTo({
          top: elementPosition,
          behavior: 'smooth'
        })
      }
    },
    getSection (id) {
      return this.getSectionById(id)
    }
  }
}
</script>

<template>
  <div class="landing-page">
    <!-- Header con bottone locations -->
    <header class="header">
      <div class="container">

        <div class="main-menu">
          <div class="header-nav justify-content-end">
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

          <h1 class="site-title" @click="scrollToSection('welcome', $event)">
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
              href="#partners"
              @click="scrollToSection('partners', $event)"
              class="nav-link">
              Media & Partners
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
            <span><em>Welcome to</em>&nbsp;Crossing</span>
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
      <PropertiesSection2
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
      <PartnersSection v-if="getSection('partners')"
                       :data="getSection('partners').content"/>
    </main>

    <!-- Footer -->
    <footer class="footer bg-teal text-gray_light">
      <div class="container">
        <div class="row">
          <div class="col-sm-6 pt-sm-3"></div>
          <div class="col-sm-6 pt-sm-3"></div>
          <div class="col-sm-6 p-3 p-sm-5">
            <p class="text-gray text-uppercase">Navigate</p>
            <div class="footer-nav">
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
              <a
                href="#art-design"
                @click="scrollToSection('art-design', $event)"
                class="nav-link">
                Art & Design
              </a>
              <a
                href="#partners"
                @click="scrollToSection('partners', $event)"
                class="nav-link">
                Media & Partners
              </a>
            </div>
          </div>
          <div class="col-sm-6 p-3 p-sm-5 d-flex flex-column justify-content-between">

            <div class="locations-list-footer">
              <p class="text-gray text-uppercase">Discover</p>
              <a
                class="d-block text-white py-3"
                v-for="(location,index) in allLocationsList"
                :key="'link-'+location.name"
                :class="'link'+index"
                :href="location.website"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span class="location-name">{{ location.name }} &nbsp;</span>
                &nbsp;-&nbsp;
                <span class="location-place">{{ location.location }}  &nbsp;</span>

              </a>
            </div>

            <p class="text-gray">All rights reserved. &copy; 2025 {{ siteConfig.siteName }}.</p>
          </div>
          <div class="col-sm-6 pt-sm-3"></div>
          <div class="col-sm-6 pt-sm-3"></div>
        </div>
      </div>

      <div class="container p-0">
          <div class="footer-logo p-3 p-sm-5 d-flex flex-wrap justify-content-between">
            <element-crossing class="mr-1"/>
            <element-collection class="ml-auto"/>
          </div>
      </div>
    </footer>

  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
import ConceptSection from '~/components/ConceptSection.vue'
import WhereaboutsSection from '~/components/WhereaboutsSection.vue'
import PropertiesSection from '~/components/PropertiesSection.vue'
import PropertiesSection2 from '~/components/PropertiesSection2.vue'
import ArtDesignSection from '~/components/ArtDesignSection.vue'
import TeamSection from '~/components/TeamSection.vue'
import LocationsModal from '~/components/LocationsModal.vue'
import MenuIcon from '~/components/MenuIcon.vue'
import CollectionLogo from "~/components/CollectionLogo.vue"
import PartnersSection from "~/components/PartnersSection.vue"
import ArrowRight from "~/components/ArrowRight.vue"
import ElementCrossing from "~/components/ElementCrossing.vue"
import ElementCollection from "~/components/ElementCollection.vue"

export default {
  components: {
    ElementCollection,
    ElementCrossing,
    ArrowRight,
    PartnersSection,
    CollectionLogo,
    ConceptSection,
    WhereaboutsSection,
    PropertiesSection, PropertiesSection2,
    ArtDesignSection,
    TeamSection,
    LocationsModal,
    MenuIcon
  },

  computed: {
    ...mapGetters([
      'siteConfig',
      'getSectionById',
      'isLocationsModalOpen', 'allLocationsList'
    ])
  },

  methods: {
    ...mapActions([
      'openLocationsModal',
      'toggleLocationsModal'
    ]),


    scrollToSection (sectionId, event) {
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

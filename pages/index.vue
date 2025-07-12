<template>
  <div class="landing-page">
    <!-- Header con menu hamburger -->
    <header class="header">
      <div class="container">
        <h1 class="site-title">{{ siteConfig.siteName }}</h1>
        <button @click="toggleModal" class="menu-toggle">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>

    <!-- Modal di navigazione -->
    <nav v-if="isModalOpen" class="modal-nav" @click="closeModal">
      <div class="modal-content" @click.stop>
        <button @click="closeModal" class="close-btn">&times;</button>
        <ul class="nav-list">
          <li v-for="section in visibleSections" :key="section.id">
            <a :href="'#' + section.id" @click="closeModal">
              {{ section.content.title }}
            </a>
          </li>
        </ul>
      </div>
    </nav>

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
import ArtDesignSection from '~/components/ArtDesignSection.vue'
import TeamSection from '~/components/TeamSection.vue'

export default {
  components: {
    ConceptSection,
    WhereaboutsSection,
    ArtDesignSection,
    TeamSection
  },

  computed: {
    ...mapGetters([
      'siteConfig',
      'visibleSortedSections',
      'isModalOpen',
      'getSectionById'
    ]),

    visibleSections() {
      return this.visibleSortedSections
    }
  },

  methods: {
    ...mapActions([
      'openModal',
      'closeModal',
      'toggleModal'
    ]),

    getSection(id) {
      return this.getSectionById(id)
    }
  }
}
</script>// Esempio di componente che utilizza lo store
<template>
  <div>
    <!-- Header con menu hamburger -->
    <header>
      <h1>{{ siteConfig.siteName }}</h1>
      <button @click="toggleModal">
        {{ isModalOpen ? 'Chiudi' : 'Menu' }}
      </button>
    </header>

    <!-- Modal di navigazione -->
    <nav v-if="isModalOpen" class="modal-nav">
      <ul>
        <li v-for="section in visibleSections" :key="section.id">
          <a :href="'#' + section.id" @click="closeModal">
            {{ section.content.title }}
          </a>
        </li>
      </ul>
    </nav>

    <!-- Contenuto principale -->
    <main>
      <p>{{ siteConfig.siteDescription }}</p>

      <!-- Renderizza le sezioni visibili -->
      <div v-for="section in visibleSections" :key="section.id">
        <component :is="section.type + 'Section'" :data="section.content" />
      </div>
    </main>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'siteConfig',
      'visibleSortedSections',
      'isModalOpen'
    ]),

    visibleSections() {
      return this.visibleSortedSections
    }
  },

  methods: {
    ...mapActions([
      'openModal',
      'closeModal',
      'toggleModal'
    ])
  }
}
</script>

<style scoped>
.modal-nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.9);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-nav ul {
  list-style: none;
  padding: 0;
  text-align: center;
}

.modal-nav li {
  margin: 1rem 0;
}

.modal-nav a {
  color: white;
  text-decoration: none;
  font-size: 1.5rem;
}
</style>

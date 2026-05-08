<template>
  <transition name="fade">
    <div v-if="isCompanyModalOpen" class="company-modal-backdrop" @click="closeCompanyModal">
      <div class="company-modal-dialog" @click.stop>
        <button class="company-modal-close" @click="closeCompanyModal" aria-label="Close">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 5L5 15M5 5L15 15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
          </svg>
        </button>
        <h3 class="company-modal-title">Company Details</h3>
        <div class="company-modal-body tbase" v-html="siteConfig.company"></div>
      </div>
    </div>
  </transition>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'CompanyDetailsModal',
  computed: {
    ...mapGetters([
      'isCompanyModalOpen',
      'siteConfig'
    ])
  },
  methods: {
    ...mapActions([
      'closeCompanyModal'
    ]),
    onKeydown(e) {
      if (e.key === 'Escape' && this.isCompanyModalOpen) {
        this.closeCompanyModal()
      }
    }
  },
  mounted() {
    document.addEventListener('keydown', this.onKeydown)
  },
  beforeDestroy() {
    document.removeEventListener('keydown', this.onKeydown)
  }
}
</script>

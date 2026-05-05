<template>
  <div v-if="isCompanyModalOpen" class="modal-overlay" id="company-modal" @click="closeCompanyModal">
    <div class="modal-content" @click.stop>
      <div class="modal-scroll company-details-content p-4 p-sm-5">
        <h3 class="modal-title">Company Details</h3>
        <ul class="list-unstyled company-details-list">
          <li><strong>Crossing Condotti:</strong> <span>CIN IT058091B4TGH49IP7</span></li>
          <li><strong>Crossing Corso:</strong> <span>CIN IT058091C2X4WJ8ECY</span></li>
          <li><strong>Casa Crossing:</strong> <span>CIN IT058091B4MWC5CQSF</span></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'CompanyDetailsModal',
  computed: {
    ...mapGetters([
      'isCompanyModalOpen'
    ])
  },
  methods: {
    ...mapActions([
      'closeCompanyModal'
    ])
  },
  watch: {
    isCompanyModalOpen(newVal) {
      if (newVal) {
        document.body.classList.add('modal-open')
      } else {
        document.body.classList.remove('modal-open')
      }
    }
  },
  beforeDestroy() {
    document.body.classList.remove('modal-open')
  }
}
</script>

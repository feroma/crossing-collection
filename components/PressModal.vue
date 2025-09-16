<template>
  <div v-if="isModalOpen" class="modal-overlay" id="press-modal">
    <div class="modal-content" @click.stop="closePressModal">
      <!-- Modal title -->
      <div class="modal-scroll">
        <img
          :src="getPressArticleSelected.article"
          :alt="getPressArticleSelected.name"
          class="press-image"
          loading="lazy"
        />

      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'PressModal',
  computed: {
    ...mapGetters([
      'isModalOpen','getPressArticleSelected'
    ])

  },
  methods: {
    ...mapActions([
      'closeModal'
    ]),

    closePressModal() {
      this.closeModal()
    }
  },
  watch: {
    isModalOpen(newVal) {
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

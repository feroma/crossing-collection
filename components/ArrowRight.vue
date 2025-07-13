<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "ArrowRight"
})
</script>

<template>
  <div class="arrow-right arrow">

    <svg width="20" height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- Linea centrale -->
      <line x1="0" y1="6" x2="19" y2="6"  stroke-width="1.3" />
      <!-- Punta della freccia (rientra di 7px da destra) -->
      <path d="M14 2 L19 6 L14 10"  stroke-width="1.3"  fill="none"/>
    </svg>

  </div>


</template>

<style scoped>

</style>

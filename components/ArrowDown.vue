<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "ArrowDown"
})
</script>

<template>
  <div class="arrow-down arrow">

    <svg width="20" height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- Linea centrale -->
      <line x1="10" y1="0" x2="10" y2="11"  stroke-width="1.3" />
      <!-- Punta della freccia (rientra di 7px da destra) -->
      <path d="M4 6 L10 11 L16 6"  stroke-width="1.3"  fill="none"/>
    </svg>

  </div>


</template>

<style scoped>

</style>

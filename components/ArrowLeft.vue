<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "ArrowLeft"
})
</script>

<template>
  <div class="arrow-left">

    <svg width="20" height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- Linea centrale -->
      <line x1="1" y1="6" x2="20" y2="6" stroke="#6289aa" stroke-width="1.3" />
      <!-- Punta della freccia (rientra di 7px da destra) -->
      <path d="M6 2 L1 6 L6 10" stroke="#6289aa" stroke-width="1.3"  fill="none"/>
    </svg>

  </div>


</template>

<style scoped>

</style>

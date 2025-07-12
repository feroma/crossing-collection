<template>
  <section id="concept" class="concept-section">
    <div class="container">
      <h2 class="section-title">{{ data.title }}</h2>

      <div v-if="data.summary" class="summary" v-html="data.summary"></div>

      <div class="body" v-html="data.body"></div>
      <arrow-down/>
    </div>
  </section>
</template>

<script>
import ArrowDown from "~/components/ArrowDown.vue"

export default {
  name: 'ConceptSection',
  components: {ArrowDown},
  props: {
    data: {
      type: Object,
      required: true
    }
  }
}
</script>

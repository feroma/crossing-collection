<template>
  <section id="concept" class="concept-section">
    <div class="container">
      <h2 class="section-title">{{ data.title }}</h2>
      
      <div v-if="data.summary" class="summary" v-html="data.summary"></div>
      
      <div class="body" v-html="data.body"></div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ConceptSection',
  props: {
    data: {
      type: Object,
      required: true
    }
  }
}
</script>
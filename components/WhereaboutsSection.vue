<template>
  <section id="whereabouts" class="whereabouts-section">
    <div class="container">
      <h2 class="section-title">{{ data.title }}</h2>

      <div class="body" v-html="data.body"></div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'WhereaboutsSection',
  props: {
    data: {
      type: Object,
      required: true
    }
  }
}
</script>

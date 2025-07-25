<template>
  <section id="whereabouts" class="whereabouts-section no-min-h">
    <div class="container">
      <div class="row align-items-center">


        <div class="col-sm-6 order-sm-2">
          <picture>
            <source
              srcset="https://www.stage72.info/crossing-collection/repo/italy_sm.jpg"
              media="(max-width: 768px)"
            >
            <img
              src="https://www.stage72.info/crossing-collection/repo/italy.jpg"
              alt="Italy"
              class="fullimage"
              loading="lazy"
            >
          </picture>
        </div>
        <div class="col-sm-4 offset-sm-2 order-sm-1">
          <h2 class="section-title d-block text-center sans tbase text-uppercase">{{ data.title }}</h2>
          <h3 v-if="data.summary" class="summary serif" v-html="data.summary"></h3>
          <div class="body" v-html="data.body"></div>

        </div>
      </div>

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

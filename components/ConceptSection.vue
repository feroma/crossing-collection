<template>
  <section id="concept" class="concept-section no-min-h">
    <div class="container">
      <div class="row align-items-center">

        <div class="col-12 text-center" v-if="data.title">
          <h2 class="section-title d-block text-center sans tbase text-uppercase">{{ data.title }}</h2>
        </div>
        <div class="col-sm-3 offset-sm-2 pr-sm-5 text-center text-md-right">

          <picture>
            <img
              src="https://www.stage72.info/crossing-collection/repo/lg/JPEG/collection_02.jpg"
              class="roundimage mb-3 "
              loading="lazy"
            />
          </picture>

        </div>
        <div class="col-sm-5 col-md-4">

          <h3 v-if="data.summary" class="summary serif" v-html="data.summary"></h3>
          <div class="body" v-html="data.body"></div>

        </div>
      </div>

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

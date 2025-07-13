<template>
  <section id="concept" class="concept-section">
    <div class="container">
      <div class="row align-items-center">

        <div class="col-md-3 offset-md-2 pr-md-5">

          <picture>
            <img
              src="https://picsum.photos/440/1000?random=1"
              class="roundimage"
              loading="lazy"
            />
          </picture>

        </div>
        <div class="col-md-5">
          <h2 class="section-title d-block text-center sans tbase text-uppercase">{{ data.title }}</h2>

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

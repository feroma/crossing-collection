<template>
  <section id="concept" class="concept-section no-min-h">
    <div class="container">
      <div class="row align-items-center align-items-lg-start">


        <div class="col-sm-3 offset-sm-2 pr-sm-5 text-center text-md-right pt-title">

          <picture>
            <img
              src="https://www.stage72.info/crossing-collection/repo/lg/JPEG/collection_02.jpg"
              class="roundimage mb-3 "
              loading="lazy"
            />
          </picture>

        </div>
        <div class="col-sm-5 col-md-4 col-lg-5">

          <h3 v-if="data.summary" class="summary t3b serif" >

            <span
              v-for="(part, index) in titleParts"
              :key="index"
              :class="['title-part', `title-part-${index + 1}`]"
            v-html="part"/>


          </h3>
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
  },
  computed: {
    titleParts() {
      if (!this.data.summary) return []
      return this.data.summary.split('*')
    }
  }
}
</script>

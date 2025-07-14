<template>
  <section id="partners" class="partners-section no-min-h pb-5">
    <div class="container">
      <div class="rounded-box  bg-yellow">
        <h3 class="d-block text-center tbase px-5 py-4 p-sm-5 m-0" v-html="data.title"></h3>
        <div class="partners-list d-flex flex-wrap p-2 p-sm-5">
          <div class="partner"
               v-for="(partner,index) in allPartners"
               :key="'partner-'+partner.name">
            <img :src="partner.logo" :alt="partner.alt">
          </div>

        </div>
      </div>
    </div>
  </section>
</template>

<script>


import {mapGetters} from "vuex"

export default {
  name: 'PartnersSection',

  props: {
    data: {
      type: Object,
      required: true
    }
  },
  computed: {
    ...mapGetters(['allPartners'])
  }
}
</script>

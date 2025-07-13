<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "PictureWrapper",
  props: {
    image: {
      type: Object,
      required: true
    },
    index: {
      type: Number,
    }
  }
})

</script>

<template>
  <picture class="picture-wrapper">
    <source
      :srcset="image.mobile"
      media="(max-width: 768px)"
    >
    <img
      :src="image.desktop"
      :alt="image.alt"
      class="gallery-image"
      loading="lazy"
    />
  </picture>
</template>

<style scoped>

</style>

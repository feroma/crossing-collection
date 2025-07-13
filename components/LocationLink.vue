<template>
  <a
    :href="location.website"
    target="_blank"
    rel="noopener noreferrer"
    class="location-link"
  >
    <p class="location-place arrow-link">
      <span class="label">{{ location.location }}</span>
      <span class="icon"><arrow-right/></span>
    </p>
    <div class="location-thumbnail">

      <picture>
        <source
          :srcset="location.mainImage.mobile"
          media="(max-width: 768px)"
        >
        <img
          :src="location.mainImage.desktop"
          :alt="location.mainImage.alt"
          class="thumbnail-image"
          loading="lazy"
        >
      </picture>
    </div>

    <div class="location-details">
      <p class="location-name">{{ location.name }}</p>
    </div>
  </a>
</template>

<script>
import ArrowRight from "~/components/ArrowRight.vue"

export default {
  name: 'LocationLink',
  components: {ArrowRight},
  props: {
    location: {
      type: Object,
      required: true
    }
  }
}
</script>

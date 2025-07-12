<template>
  <a
    :href="location.website"
    target="_blank"
    rel="noopener noreferrer"
    class="location-link"
  >
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
      <h3 class="location-name">{{ location.name }}</h3>
      <p class="location-type">{{ location.description }}</p>
      <p class="location-place">{{ location.location }}</p>
    </div>
  </a>
</template>

<script>
export default {
  name: 'LocationLink',
  props: {
    location: {
      type: Object,
      required: true
    }
  }
}
</script>

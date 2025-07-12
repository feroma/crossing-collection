<template>
  <div class="location-card">
    <div class="location-header">
      <h3 class="location-name">{{ location.name }}</h3>
      <span class="location-type">{{ location.description }}</span>
    </div>

    <div class="location-info">
      <p class="location-place">{{ location.location }}</p>
      <a
        :href="location.website"
        target="_blank"
        rel="noopener noreferrer"
        class="location-website"
      >
        Visit Website
      </a>
    </div>

    <!-- Image Gallery -->
    <div class="image-gallery">
      <div
        v-for="(image, index) in location.gallery"
        :key="index"
        class="image-container"
      >
        <picture>
          <source
            :srcset="image.mobile"
            media="(max-width: 768px)"
          >
          <img
            :src="image.desktop"
            :alt="image.alt"
            class="gallery-image"
            loading="lazy"
          >
        </picture>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LocationGallery',
  props: {
    location: {
      type: Object,
      required: true
    }
  }
}
</script>

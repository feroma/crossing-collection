<template>
  <section id="team" class="team-section">
    <div class="container">
      <h2 class="section-title">{{ data.title }}</h2>
      
      <div class="staff-grid">
        <div 
          v-for="person in data.staff" 
          :key="person.name" 
          class="staff-member"
        >
          <div class="staff-header">
            <h3 class="staff-name">{{ person.name }}</h3>
            <p class="staff-role">{{ person.role }}</p>
          </div>
          
          <p class="staff-description">{{ person.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'TeamSection',
  props: {
    data: {
      type: Object,
      required: true
    }
  }
}
</script>
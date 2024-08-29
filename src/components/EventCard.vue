<script setup>
  import { ref } from 'vue'

  defineProps({
    event: {
      type: Object,
      required: true
    }
  })
</script>

<template>
  <RouterLink class="event-link" :to="{ name: 'event-details', params: { id: event.id } }">
    <div class="event-card">
      <h2>{{ event.title }}</h2>
      <span>@{{ event.time }} on {{ event.date }}</span>
    </div>
  </RouterLink>
</template>

<style scoped>
  .event-link {
    color: #2c3e50;
    text-decoration: none;
  }
</style>
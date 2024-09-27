<template>
  <v-card>
    <v-card-title>
      <v-icon left>{{ icon }}</v-icon>
      {{ title }}
    </v-card-title>
    <v-card-text>
      <div class="display-1">{{ value }}</div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'DashboardCard',
  props: {
    title: String,
    value: String,
    icon: String
  }
}
</script>

<style scoped>
.v-card {
  text-align: center;
}
.display-1 {
  font-size: 2.5rem;
  font-weight: bold;
}
</style>

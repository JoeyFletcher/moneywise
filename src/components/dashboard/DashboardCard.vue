<template>
  <v-card :class="cardClass">
    <v-card-title>
      <v-icon left>{{ icon }}</v-icon>
      <span>{{ title }}</span>
    </v-card-title>
    <v-card-text>
      <div class="display-1">{{ formattedValue }}</div>
    </v-card-text>
    <v-card-actions v-if="footerText">
      <v-divider></v-divider>
      <v-card-subtitle class="footer">{{ footerText }}</v-card-subtitle>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'DashboardCard',
  props: {
    title: {
      type: String,
      required: true
    },
    value: {
      type: [String, Number],
      required: true
    },
    icon: {
      type: String,
      default: 'mdi-chart-bar' // Default icon if none is provided
    },
    color: {
      type: String,
      default: 'primary' // Default color for the card
    },
    footerText: {
      type: String,
      default: ''
    },
    valueFormat: {
      type: Function,
      default: (value) => value // Default value formatter, returns the value unchanged
    }
  },
  computed: {
    formattedValue() {
      return this.valueFormat(this.value) // Format the value if needed
    },
    cardClass() {
      return `bg-${this.color} white--text` // Add dynamic color classes to the card
    }
  }
}
</script>

<style scoped>
.v-card {
  text-align: center;
  padding: 20px;
}

.display-1 {
  font-size: 2.5rem;
  font-weight: bold;
}

.footer {
  margin-top: 10px;
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.7);
}
</style>

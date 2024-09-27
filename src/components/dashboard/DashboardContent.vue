<template>
    <div class="dashboard-content">
      <!-- Your dashboard cards and content go here -->
      <dashboard-card
        title="Total Expenses"
        :value="15000"
        icon="mdi-currency-usd"
        color="error"
        footerText="Compared to last month"
        :valueFormat="value => `$${value.toLocaleString()}`"
      />
      <dashboard-card
        title="Total Savings"
        :value="30000"
        icon="mdi-piggy-bank"
        color="success"
        footerText="This year"
        :valueFormat="value => `$${value.toLocaleString()}`"
      />
      <!-- Add more dashboard cards or content as needed -->
    </div>
  </template>

<script>
import DashboardCard from '@/components/dashboard/DashboardCard.vue'

export default {
  name: 'DashboardContent',
  components: {
    DashboardCard
  }
}
</script>

  <style scoped>
  .dashboard-content {
    padding: 20px;
  }
  </style>

<template>
    <header class="dashboard-header">
      <div class="header-content">
        <h1>Welcome to Your Dashboard</h1>
        <!-- Example: User info or navigation -->
        <v-btn icon @click="toggleSidebar">
          <v-icon>{{ isSidebarOpen ? 'mdi-menu-open' : 'mdi-menu' }}</v-icon>
        </v-btn>
        <div class="user-info">
          <span>{{ userName }}</span>
        </div>
      </div>
    </header>
  </template>

<script>
export default {
  name: 'DashboardHeader',
  props: {
    userName: {
      type: String,
      default: 'User'
    },
    isSidebarOpen: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    toggleSidebar() {
      this.$emit('toggle-sidebar')
    }
  }
}
</script>

  <style scoped>
  .dashboard-header {
    background-color: #2c3e50;
    color: white;
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .header-content {
    display: flex;
    align-items: center;
  }
  .user-info {
    margin-left: auto;
  }
  </style>

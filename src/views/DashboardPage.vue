<template>
  <div class="dashboard-layout">
    <!-- Sidebar -->
    <user-sidebar :isOpen="isSidebarOpen" @toggle-sidebar="toggleSidebar" />

    <!-- Main content area -->
    <div class="dashboard-content">
      <!-- Header -->
      <dashboard-header
        :userName="userName"
        :isSidebarOpen="isSidebarOpen"
        @toggle-sidebar="toggleSidebar"
      />
      <!-- Dashboard Content Below the Header -->
      <div class="dashboard-main">
        <dashboard-content />
      </div>
    </div>
  </div>
</template>

<script>
import DashboardHeader from '@/components/dashboard/DashboardHeader.vue'
import DashboardContent from '@/components/dashboard/DashboardContent.vue'
import UserSidebar from '@/components/dashboard/UserSidebar.vue'

export default {
  name: 'DashboardPage',
  data() {
    return {
      userName: 'John Doe',
      isSidebarOpen: true // Tracks sidebar open/closed state
    }
  },
  components: {
    DashboardHeader,
    DashboardContent,
    UserSidebar
  },
  methods: {
    toggleSidebar() {
      this.isSidebarOpen = !this.isSidebarOpen
    }
  }
}
</script>

<style scoped>
.dashboard-layout {
  display: flex;
  flex-direction: row;
  height: 100vh; /* Ensure the layout fills the viewport height */
}

.dashboard-content {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.dashboard-header {
  width: 100%;
  background-color: #2c3e50;
  color: white;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.dashboard-main {
  flex-grow: 1;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Sidebar adjustments */
.user-sidebar {
  width: 250px;
  height: 100vh;
  background-color: #2c3e50;
  position: fixed;
  top: 0;
  left: 0;
}

.user-sidebar-closed {
  width: 80px; /* Adjust sidebar width when closed */
}

</style>

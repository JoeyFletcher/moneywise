<template>
  <aside :class="{'sidebar-open': isOpen, 'sidebar-closed': !isOpen}" class="sidebar">
    <div class="sidebar-header">
      <h3 v-if="isOpen">MoneyWise</h3>
      <button @click="toggleSidebar" class="toggle-button">
        <i :class="isOpen ? 'bx bx-menu-alt-left' : 'bx bx-menu'"></i>
      </button>
    </div>

    <ul class="sidebar-menu">
      <li class="sidebar-menu-item" v-for="item in menuItems" :key="item.name">
        <router-link :to="item.link" class="menu-link">
          <i :class="item.icon"></i>
          <span v-if="isOpen">{{ item.name }}</span>
        </router-link>
      </li>
    </ul>
  </aside>
</template>

<script>
export default {
  name: 'UserSidebar',
  data() {
    return {
      isOpen: true,
      menuItems: [
        { name: 'Dashboard', link: '/dashboard', icon: 'bx bx-home' },
        { name: 'Expenses', link: '/expenses', icon: 'bx bx-dollar' },
        { name: 'Investments', link: '/investments', icon: 'bx bx-line-chart' },
        { name: 'Savings', link: '/savings', icon: 'bx bx-piggy-bank' },
        { name: 'Goals', link: '/goals', icon: 'bx bx-target-lock' }
      ]
    }
  },
  methods: {
    toggleSidebar() {
      this.isOpen = !this.isOpen
    }
  }
}
</script>

<style scoped>
.sidebar {
  width: 250px;
  background-color: #2c3e50;
  color: white;
  height: 100vh;
  transition: width 0.3s ease-in-out;
  position: relative;
}

.sidebar-closed {
  width: 80px;
}

.sidebar-header {
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.toggle-button {
  background-color: #4CAF50; /* Light green button background */
  border: none;
  color: white; /* White icon color */
  padding: 5px;
  cursor: pointer;
  position: absolute;
  top: 15px;
  right: 10px; /* Adjusted to ensure the button stays on the sidebar */
  width: 35px;
  height: 35px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: right 0.3s ease-in-out;
}

.toggle-button i {
  font-size: 20px;
}

.toggle-button:hover {
  background-color: #45a049; /* Slightly darker green on hover */
}

.sidebar-closed .toggle-button {
  right: 10px; /* Adjusted position for closed state */
}

.sidebar-menu {
  list-style: none;
  padding: 0;
}

.sidebar-menu-item {
  padding: 10px;
  text-align: left;
}

.menu-link {
  color: white;
  text-decoration: none;
  display: flex;
  align-items: center;
}

.menu-link i {
  margin-right: 10px;
}
</style>

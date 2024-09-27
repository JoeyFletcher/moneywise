<template>
    <aside :class="{'sidebar-open': isOpen, 'sidebar-closed': !isOpen}" class="sidebar">
      <div class="sidebar-header">
        <h3>MoneyWise</h3>
        <button @click="toggleSidebar" class="toggle-button">
          {{ isOpen ? 'Close' : 'Open' }}
        </button>
      </div>

      <ul class="sidebar-menu">
        <li class="sidebar-menu-item" v-for="item in menuItems" :key="item.name">
          <router-link :to="item.link" class="menu-link">
            <i :class="item.icon"></i> {{ isOpen ? item.name : '' }}
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
    transition: width 0.3s;
    overflow: hidden;
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
    background-color: #34495e;
    border: none;
    color: white;
    padding: 5px 10px;
    cursor: pointer;
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

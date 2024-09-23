<template>
    <nav>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="/dashboard">Dashboard</router-link></li>
      </ul>
    </nav>
  </template>

<script>
export default {
  name: 'AppNavbar' // Descriptive, multi-word component name
}
</script>

  <style scoped>
  nav ul {
    list-style-type: none;
    padding: 0;
  }

  nav ul li {
    display: inline-block;
    margin-right: 15px;
  }
  </style>

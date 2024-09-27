<template>
  <v-app>
    <!-- Router view to render the correct component based on the route -->
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App'
}
</script>

<template>
  <v-container class="pa-10 text-center">
    <v-card class="pa-10">
      <h1>Welcome to MoneyWise</h1>
      <p>
        Your comprehensive solution to managing personal finances effectively. Track your income,
        expenses, set savings goals, and gain actionable insights into your financial health.
      </p>
      <v-btn color="primary" class="ma-4" large @click="$router.push('/signup')">
        Sign Up
      </v-btn>
      <v-btn color="secondary" class="ma-4" large @click="$router.push('/login')">
        Login
      </v-btn>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: 'HomePage'
}
</script>

<style scoped>
.v-btn {
  width: 150px;
}
</style>

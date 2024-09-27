<template>
  <v-container class="pa-10 text-center">
    <v-card class="pa-8">
      <h2>Login to Your Account</h2>
      <v-text-field label="Email" v-model="email" />
      <v-text-field label="Password" type="password" v-model="password" />
      <v-btn color="primary" large @click="login">Login</v-btn>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async login() {
      console.log('Login button clicked') // Add this line for debugging
      try {
        const response = await fetch('http://localhost:8000/api/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            email: this.email,
            password: this.password
          })
        })

        if (response.ok) {
          const data = await response.json()
          console.log('Login successful:', data) // Log successful login
          this.$router.push('/dashboard') // Redirect to dashboard after login
        } else {
          const errorData = await response.json()
          console.error('Login error:', errorData.error)
          alert('Invalid credentials. Please try again.')
        }
      } catch (error) {
        console.error('Error during login request:', error) // Log request error
        alert('An error occurred. Please try again.')
      }
    }
  }
}
</script>

<style scoped>
.v-btn {
  margin: 4px;
}
</style>

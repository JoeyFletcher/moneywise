<template>
  <v-container class="pa-10 text-center">
    <v-card class="pa-8">
      <h2>Create a New Account</h2>
      <v-text-field label="Email" v-model="email" />
      <v-text-field label="Password" type="password" v-model="password" />
      <v-btn color="primary" large @click="signUp">Sign Up</v-btn>
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
    async signUp() {
      console.log('Sign-up button clicked') // Add this line for debugging
      try {
        const response = await fetch('http://localhost:8000/api/users', {
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
          console.log('User created successfully:', data) // Log successful sign-up
          this.$router.push('/dashboard') // Redirect to dashboard after sign-up
        } else {
          const errorData = await response.json()
          console.error('Error creating user:', errorData.error)
          alert('Failed to create user.')
        }
      } catch (error) {
        console.error('Error during sign-up:', error)
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

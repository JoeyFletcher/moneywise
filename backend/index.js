require('dotenv').config()
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const { connectDB, syncModels } = require('./models/index')
const User = require('./models/User')

const app = express()
app.use(cors())
app.use(bodyParser.json())

// Connect to the database and sync models
connectDB()
syncModels()

// Create a new user (Sign-Up)
app.post('/api/users', async (req, res) => {
  try {
    const { email, password } = req.body
    console.log('Sign-up attempt:', email) // Log sign-up attempt
    const user = await User.create({ email, password })
    console.log('User created:', user)
    res.status(201).json(user)
  } catch (error) {
    console.error('Error creating user:', error)
    res.status(400).json({ error: error.message })
  }
})

// Login route to verify user credentials
app.post('/api/login', async (req, res) => {
  try {
    const { email, password } = req.body
    console.log('Login attempt:', email) // Log login attempt
    const user = await User.findOne({ where: { email } })

    // Check if the user exists
    if (!user) {
      console.log('User not found:', email) // Log user not found
      return res.status(400).json({ error: 'User not found' })
    }

    // For now, we're directly comparing the password without hashing
    if (user.password !== password) {
      console.log('Invalid password for user:', email) // Log invalid password
      return res.status(400).json({ error: 'Invalid password' })
    }

    console.log('Login successful for user:', email) // Log successful login
    res.status(200).json({ message: 'Login successful', userId: user.id })
  } catch (error) {
    console.error('Login error:', error.message)
    res.status(500).json({ error: error.message })
  }
})

const PORT = process.env.PORT || 8000
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))

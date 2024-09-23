const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const { connectDB, sequelize } = require('./models/index') // Import sequelize for syncing
const User = require('./models/User')
require('dotenv').config()

const app = express()
app.use(cors())
app.use(bodyParser.json())

// Connect to the database
connectDB()

// Sync the database (ensures tables are created)
sequelize.sync({ force: false }) // Set force to true if you want to drop and recreate tables
  .then(() => {
    console.log('Database synced successfully')
  })
  .catch((err) => {
    console.error('Error syncing database:', err)
  })

// API Routes

// Create a new user
app.post('/users', async (req, res) => {
  try {
    const user = await User.create(req.body)
    res.status(201).json(user)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
})

// Get all users
app.get('/users', async (req, res) => {
  try {
    const users = await User.findAll()
    res.status(200).json(users)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

// Get user by ID
app.get('/users/:id', async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id)
    if (!user) {
      return res.status(404).json({ error: 'User not found' })
    }
    res.status(200).json(user)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

// Start the server
const PORT = process.env.PORT || 8000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

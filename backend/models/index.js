const { Sequelize } = require('sequelize')
require('dotenv').config()

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './backend/database.sqlite', // Path to your SQLite database file
  logging: false
})

const connectDB = async () => {
  try {
    await sequelize.authenticate()
    console.log('Database connected successfully.')
  } catch (error) {
    console.error('Unable to connect to the database:', error)
  }
}

const syncModels = async () => {
  try {
    await sequelize.sync({ force: false }) // Ensure tables are synced
    console.log('Database & tables created!')
  } catch (error) {
    console.error('Error syncing models:', error)
  }
}

module.exports = { sequelize, connectDB, syncModels }

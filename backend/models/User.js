const { DataTypes } = require('sequelize')
const { sequelize } = require('./index') // Ensure this path is correct

const User = sequelize.define('User', {
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true
    }
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  timestamps: true // This will automatically add createdAt and updatedAt fields
})

module.exports = User

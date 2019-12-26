const sequelize = require('sequelize')

const db = new sequelize('postgres://localhost:5432/boilerplate', {
  logging: false
})

module.exports = db

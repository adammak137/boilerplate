const sequelize = require('sequelize')
const db = require('./index')

const Clothes = db.define('clothes', {
  name: {
    type: sequelize.STRING,
  },
  color: {
    type: sequelize.STRING,
  },
})

module.exports = Clothes

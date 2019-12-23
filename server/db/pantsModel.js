const sequelize = require('sequelize')
const db = require('./index')

const Pants = db.define('pants', {
  name: {
    type: sequelize.STRING,
  },
  color: {
    type: sequelize.STRING,
  },
})

module.exports = Pants

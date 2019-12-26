const Pants = require('./pantsModel')
const Clothes = require('./clothesModel')
const User = require('./user')
const db = require('./index')

module.exports = {
  db, Pants, Clothes, User
}


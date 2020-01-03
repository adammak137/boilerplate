const router = require('express').Router()
const { User } = require('../db/database')
const axios = require('axios')
module.exports = router

router.post('/', async (req, res, next) => {
  try {
    const endUser = await User.findOrCreate({
      where: {
        email: req.body.email
      },
      defaults: req.body
    })
    res.status(201).json(endUser)
  } catch (error) {
    next(error)
  }
})

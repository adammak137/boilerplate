const router = require('express').Router()
const passport = require('passport')
const { User } = require('../db/database')
module.exports = router


router.put('/', async (req, res, next) => {
  try {
    let userInfo = await User.findOne({
      where: {
        email: req.body.email,
        password: req.body.password
      }
    })
    if (userInfo) {
      let data = { id: userInfo.id, email: userInfo.email }
      req.login(data, (err) => err ? next(err) : res.json(data).status(201))
    } else {
      const err = new Error('Incorrect email or password!')
      err.status = 401
      throw err
    }
  } catch (error) {
    next(error)
  }
})

router.get('/', (req, res, next) => {
  try {
    if (req.user) return res.status(201).json(req.user)
    return res.status(201).send({ id: 0 })
  } catch (error) {
    next(error)
  }
})

passport.serializeUser((user, done) => {
  try {
    done(null, user.id)
  } catch (error) {
    done(error)
  }
})

passport.deserializeUser(async (id, done) => {
  try {
    let userInfo = await User.findByPk(id)
    let data = { id: userInfo.id, email: userInfo.email }
    if (userInfo) return done(null, data)
    done(null)
  } catch (error) {
    done(error)
  }
})

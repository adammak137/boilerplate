let router = require('express').Router()

router.use('/clothes', require('./clothes'))
router.use('/pants', require('./pants'))
router.use('/auth', require('./auth'))
router.use('/users', require('./users'))

router.use(function (req, res, next) {
  const err = new Error('Not found.');
  err.status = 404;
  next(err);
});


module.exports = router

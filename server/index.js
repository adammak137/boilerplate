const express = require('express')
const morgan = require('morgan')
const path = require('path')
const { db, User } = require('./db/database')
const session = require('express-session')
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const passport = require('passport')
const app = express()
const dbStore = new SequelizeStore({ db: db });
dbStore.sync();


app.use(morgan('dev'))
app.use(express.static(path.join(__dirname, '../public')))
app.use(express.json())

app.use(session({
  secret: process.env.SESSION_SECRET || 'a wildly insecure secret',
  store: dbStore,
  resave: false,
  saveUninitialized: false
}))

app.use(passport.initialize())
app.use(passport.session())

app.use('*', (req, res, next) => {
  next()
})

app.use('/api', require('./api/apiRoutes'))

app.get('', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
})

app.get('*', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
})


app.use(function (err, req, res, next) {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal server error.');
});

const port = process.env.PORT || 1338; // this can be very useful if you deploy to Heroku!
db.sync()
  .then(function () {
    // User.create({ email: 'cody@email.com', password: 12345 })
    app.listen(port, function () {
      console.log("Knock, knock");
      console.log("Who's there?");
      console.log(`Your server, listening on port ${port}`);
    })
  })


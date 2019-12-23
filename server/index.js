const express = require('express')
const morgan = require('morgan')
const path = require('path')
const { db } = require('./db/database')
const app = express()

app.use(morgan('dev'))
app.use(express.static(path.join(__dirname, '../public')))
app.use(express.json())
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
db.sync({ force: true })
  .then(function () {
    app.listen(port, function () {
      console.log("Knock, knock");
      console.log("Who's there?");
      console.log(`Your server, listening on port ${port}`);
    })
  })


var express = require("express");
var passport = require('passport');
var path = require("path");
var models = require("./app/models");
var auth = require("./auth/auth")
var morgan = require("morgan");
var bodyParser = require('body-parser');
var app = express();
var routes = require('./routes')


// app.use(cors({
//   credentials: true,
//   origin: true,
// }));
app.use(bodyParser.json({ limit: '50mb' }))
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, Accept, Content-Type, Content-Length, Authorization, X-Requested-With, X-XSRF-TOKEN");
  res.header("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, OPTIONS");
  if (req.method === 'OPTIONS') {
    console.log('OPTIONS SUCCESS');
    res.end();
  }
  next();
});


require('./auth/passport');
app.use(passport.initialize());
require('./auth/auth.config')(passport)
app.use('/api/', routes)
app.use('/auth', auth)

models.sequelize.sync().then(function () {
  var server = app.listen(4200, function () {
    console.log('Express server listening on port ' + server.address().port);
  });
});
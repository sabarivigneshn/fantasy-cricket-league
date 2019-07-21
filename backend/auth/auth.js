const express = require('express');
const router = express.Router();
const passport = require('passport')
const jwt = require('jsonwebtoken')

router.post('/login', function (req, res, next) {
  console.log('---------came in ')
  passport.authenticate('local', { session: false }, (err, user, info) => {
    
    if (err) { 
      console.log('errrrrr', err)
      return next(err); 
    }
    if (!user) {
      return res.status(401).json({
        message: info ? info : 'Login failed',
        user: user,
        status: 401
      });
    }
    req.login(user, { session: false }, (err) => {
      if (err) { return next(err); }
      var token = jwt.sign({
        userDetails: user,
        createdAt: Date.now(),
        exp: Date.now() + 3600000, //expiry time for jwt token
      }, 'HS256');
      let object = {
        user: user,
        token: token,
        status: 200
      }
      res.json(object);
    });
  })(req, res, next);
});

module.exports = router;

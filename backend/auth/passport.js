const passport = require('passport');
var passportJWT = require('passport-jwt');
var ExtractJWT = passportJWT.ExtractJwt;
var LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs')

var JWTStrategy = passportJWT.Strategy; const models = require('../app/models')

passport.use(new LocalStrategy(
  function (username, password, done) {
    models.Users.findOne({
      where: {
        emailId: username
      }
    }).then((data) => {
      if (data) {
          bcrypt.compare(password, data.password, function (err, res) {
            if (err) return done(err);
            if (res === false) {
              return done(null, false, 'Wrong password');
            } else {
              let user = {}
              // not null fields
              user.id = data.id
              user.firstName = data.firstName
              user.lastName = data.lastName
              user.emailId = data.emailId
              user.dateOfBirth = data.dateOfBirth
              user.createdAt = data.createdAt
              user.updatedAt = data.updatedAt
              user.isActive = data.isActive
              // nullable fields
              return done(null, user, 'Logged in');
            }
          })
      } 
    }).catch(err => {
      return done(err);
    })
  }
));

passport.use(new JWTStrategy({
  jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
  secretOrKey: 'HS256',
},
  function (jwtPayload, cb) {
    // find the user in db if needed
    return models.Users.findByPk(jwtPayload.userDetails.id)
      .then(user => {
        //check if jwt is valid
        const isExpired = (jwtPayload.exp - Date.now())
        if (isExpired < 0) { return cb(new Error('Token Expired'), false) }

        return cb(null, user);

      })
      .catch(err => {
        return cb(err);
      });
  }
));



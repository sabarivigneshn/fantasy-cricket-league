const models = require('../app/models')

module.exports = (passport) => {
    passport.serializeUser(function(user, done) {
        done(null, user.id);
      });
      
      passport.deserializeUser(function(id, done) {
        console.log("deserializeUser called", id);
        models.Users.findById(id, function(err, user) {
          done(err, user);
        });
      });
}


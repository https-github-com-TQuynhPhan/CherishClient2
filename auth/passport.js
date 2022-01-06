const passport = require('passport')
    , LocalStrategy = require('passport-local').Strategy;

const useraccounts=require('../models/useraccounts');

passport.use(new LocalStrategy(

    function (username, password, done) {
        useraccounts.findOne({ Account: username }, function (err, user) {
            if (err) { return done(err); }
            if (!user) {
                return done(null, false, { message: 'Incorrect username.' });
            }
            if (!validPassword(user,password)) {
                return done(null, false, { message: 'Incorrect password.' });
            }
            return done(null, user);
        });
    }
));

function validPassword(user,password){
    return user.Password===password;
};
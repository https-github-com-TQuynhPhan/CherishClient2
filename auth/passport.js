const passport = require('passport')
    , LocalStrategy = require('passport-local').Strategy;

const useraccounts=require('../models/useraccounts');

passport.use(new LocalStrategy(

    async function (username, password, done) {
        try{
            const user=await useraccounts.findOne({ Account: username }).lean();
            if (!user) {
                return done(null, false, { message: 'Incorrect username.' });
            }
            if (!validPassword(user,password)) {
                return done(null, false, { message: 'Incorrect password.' });
            }
            return done(null, user);
        }
        catch(err){
            return done(err);
        }
    },
));

passport.serializeUser(function (user, done) {
    done(null, user.Account);
});

passport.deserializeUser(function (account, done) {
    useraccounts.findOne({Account:account}, function(err, user) {
        done(err, user);
    });
});

function validPassword(user,password){
    return user.Password===password;
};

module.exports=passport;
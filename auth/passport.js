const bcrypt = require('bcrypt');
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
            const match=await validPassword(user,password);
            if (!match) {
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
    done(null, {account:user.Account,password:user.Password});
});

passport.deserializeUser(function (user, done) {
    return done(null,user);
});

async function validPassword(user,password){
    return bcrypt.compare(password, user.Password);
};

module.exports=passport;
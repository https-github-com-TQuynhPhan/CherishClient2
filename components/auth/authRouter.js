const express = require('express');
const router = express.Router();
const passport = require('../../auth/passport');
const authController = require('./authController');

/* GET home page. */
router.get('/signIn', authController.signInGet);

router.post('/signIn',
    passport.authenticate('local', {
        successRedirect: '/',
        failureRedirect: '/signIn'
    }));

router.get('/signUp', function (req, res, next) {
    res.render('auth/signUp', {title: 'Express'});
});

module.exports = router;
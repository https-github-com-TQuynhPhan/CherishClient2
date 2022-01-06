const express = require('express');
const router = express.Router();
const passport = require('../../auth/passport');
const authController = require('./authController');

/* GET home page. */
router.get('/signIn', authController.signInGet);

router.post('/signIn',
    passport.authenticate('local', {
        successRedirect: '/',
        failureRedirect: '/signIn?wrongPassword'
    }));

router.get('/signUp', authController.signUpGet);

router.post('/signUp',authController.signUpPost);

router.get('/logout', authController.logout);

module.exports = router;
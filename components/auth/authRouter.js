var express = require('express');
var router = express.Router();
const authController=require('./authController');

/* GET home page. */
router.get('/signIn', authController.list);

router.get('/signUp', function(req, res, next) {
  res.render('auth/signUp', { title: 'Express' });
});

module.exports = router;
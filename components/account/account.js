var express = require('express');
var router = express.Router();
const accountController=require('./accountController');

/* GET home page. */
router.get('/signIn', accountController.list);

router.get('/signUp', function(req, res, next) {
  res.render('account/signUp', { title: 'Express' });
});

module.exports = router;
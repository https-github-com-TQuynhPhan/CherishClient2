var express = require('express');
var router = express.Router();
const cartController=require('./cartController');

router.get('/', cartController.listCart);

module.exports = router;
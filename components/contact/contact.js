var express = require('express');
var router = express.Router();
const contactController=require('./contactController')

/* GET home page. */
router.get('/', contactController.list);

module.exports = router;
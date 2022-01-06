var express = require('express');
var router = express.Router();

const productController=require('./productController');

/* GET home page. */
router.get('/soapList', productController.listProduct);

router.get('/candleList', function(req, res, next) {
  res.render('product/candleList', { title: 'Express' });
});

router.get('/oilList', function(req, res, next) {
  res.render('product/oilList', { title: 'Express' });
});

router.get('/productDetail', function(req, res, next) {
  res.render('product/productDetail', { title: 'Express' });
});

module.exports = router;
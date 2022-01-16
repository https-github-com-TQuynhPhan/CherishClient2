const express = require('express');
const router = express.Router();

const productController=require('./productController');

/* GET home page. */
router.get('/', productController.listProduct);

// router.get('/candleList', function(req, res, next) {
//   res.render('product/candleList', { title: 'Express' });
// });
//
// router.get('/oilList', function(req, res, next) {
//   res.render('product/oilList', { title: 'Express' });
// });

router.get('/:ProductID', productController.listDetail);
module.exports = router;
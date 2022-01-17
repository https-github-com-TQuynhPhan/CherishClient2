const {Router}=require('express');
const router=Router();

const apiProductController=require('./apiProductController');


router.post('/review', apiProductController.review);
router.get('/:productID/reviews',apiProductController.getReviews);

module.exports = router;
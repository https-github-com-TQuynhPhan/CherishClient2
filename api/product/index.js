const {Router}=require('express');
const router=Router();

const apiProductController=require('./apiProductController');


router.post('/review', apiProductController.review);

module.exports = router;
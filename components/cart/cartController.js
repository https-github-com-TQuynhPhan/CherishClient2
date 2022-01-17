const cartService=require('./cartService');

exports.listCart = async (req, res)=>{
    const productPerPage=3;
    const pageNumber=!isNaN(req.query.page) &&req.query.page>1?req.query.page:1;
    const cart=await cartService.listCart(pageNumber,productPerPage);
    res.render('cart/cart', { cart});
};
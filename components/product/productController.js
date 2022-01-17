const productService=require('./productService');

exports.listProduct = async (req, res)=>{
	const productPerPage=9;
	const pageNumber=!isNaN(req.query.page) &&req.query.page>1?req.query.page:1;
	const products=await productService.listProduct(pageNumber,productPerPage);
	res.render('product/productList', { products});
};



exports.listDetail=async (req,res)=>{
	let id="SP001";
	try{
		id=req.params.ProductID;
		id=id.substring(1);
	}catch (err) {
		throw err;
	}
	const productDetail=await productService.listDetail(id);
	res.render('product/productDetail',{productDetail});
};

exports.cart=(req,res)=>{
	res.render('product/cart');
};
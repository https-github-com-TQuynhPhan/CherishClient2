const productService=require('./productService');

exports.listProduct = async (req, res)=>{
	let type="TY001";
	const products=await productService.listProduct(type);
	res.render('product/soapList', { products });
};
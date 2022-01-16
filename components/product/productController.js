const productService=require('./productService');
const productCategories=require('../../models/productcategories')

exports.listProduct = async (req, res)=>{
	let type="TY001";
	const productPerPage=6;
	const pageNumber=!isNaN(req.query.page) &&req.query.page>1?req.query.page:1;
	const products=await productService.listProduct(type,pageNumber,productPerPage);
	// products.aggregate([
	// 	{
	// 		$lookup:
	// 			{
	// 				from: productCategories,
	// 				localField: 'CategoryID',
	// 				foreignField: 'Category'
	// 			}
	// 	}
	// ]);
	res.render('product/soapList', { products});
};

exports.listDetail=async (req,res)=>{
	let id="SP001";
	try{
		id=req.params.ProductID;
		id=id.substring(1);
	}catch (e) {

	}
	const productDetail=await productService.listDetail(id);
	res.render('product/productDetail',{productDetail});
};
const productService=require('./productService');
const productcategories=require('../../models/productcategories');

exports.listProduct = async (req, res)=>{
	let type="TY001";
	const productPerPage=6;
	const pageNumber=!isNaN(req.query.page) &&req.query.page>1?req.query.page:1;
	const products=await productService.listProduct(type,pageNumber,productPerPage);
	// productcategories.aggregate([
	// 	{
	// 		$lookup:
	// 			{
	// 				from: products,
	// 				localField: 'CategoryID',
	// 				foreignField: 'Category',
	// 				as:category
	// 			}
	// 	}
	// ],function (err,res){
	// 	if (err) throw err;
	// 	console.log(res);
	// } );
	const category=productcategories.find({CategoryID:type});
	//console.log(category.CategoryID);

	
	//const category=productcategories.find({CategoryID: type});
	// console.log("ID",category);
	res.render('product/soapList', { products, category: category});
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
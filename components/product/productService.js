const products=require('../../models/products');

exports.listProduct=(type)=>{
    return products.find({Category:type}).lean();
};
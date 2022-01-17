const cart = require('../../models/cartitems');
const cartitems = require('../../models/cartitems');

// exports.listCart = (pageNumber, productPerPage) => {
//     return cart
//         .find().lean()
//         .skip(pageNumber > 0 ? ((pageNumber - 1) * productPerPage) : 0)
//         .limit(productPerPage);
// };


exports.listCart = (pageNumber, productPerPage) => {
    // cart.aggregate([
    //     {
    //         $lookup:
    //             {
    //                 from: cartitems,
    //                 localField: cart.CartItem,
    //                 foreignField: cartitems.CartItemID,
    //                 as: "cartInfo"
    //             }
    //     }
    // ]);
    // return "cartInfo";
    return cart
        .find().lean()
        .skip(pageNumber > 0 ? ((pageNumber - 1) * productPerPage) : 0)
        .limit(productPerPage);
};
const Review=require('../../models/reviews');

exports.review=async (req,res)=>{
    const {ProductID, name, rate, detail}=req.body();
    try{
        const newReview=await Review.create({
            ReviewID: "RV001",
            Name: name,
            ProductID: ProductID,
            CommentDay: new Date().toISOString().slice(0, 10),
            Detail: detail,
            Rate: rate
        });
        res.status(201).json(newReview);
    } catch (error) {
        res.status(500).json({
            status:"failed",
            message:error.message
        });
    }
};
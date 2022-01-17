const Review = require('../../models/reviews');

exports.review = async (req, res) => {
    const {productID, name, rate, detail} = req.body;
    try {
        const newReview = await Review.create({
            ReviewID: "BL007",
            Name: name,
            ProductID: productID,
            CommentDay: new Date().toISOString().slice(0, 10),
            Detail: detail,
            Rate: rate
        });
        res.status(201).json(newReview);
    } catch (error) {
        res.status(500).json({
            status: "failed",
            message: error.message
        });
    }
};

exports.getReviews = (req, res) => {
    const productID = req.params.ProductID;
    Review.find({productID})
        .then((reviews) => {
            res.status(200).json(reviews);
        })
        .catch((error) => {
            res.status(500).json({
                status: 'fail',
                message: error.message,
            })
        });
};
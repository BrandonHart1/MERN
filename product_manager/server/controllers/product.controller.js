const Product = require('../models/product.model');
const ProductController = require('../models/product.model')

module.exports.getOneProduct = (req, res) => {
    Product.findOne({_id: req.params.id})
        .then(foundProduct => {
            res.json({results: foundProduct})
        })
        .catch(err => res.json({ message: "Something Went Wrong", error: err}));
}

module.exports.createProduct = (req, res) => {
    console.log(req.body)
    Product.create(req.body)
        .then(newlyCreatedProduct => {
            res.json({results: newlyCreatedProduct})
        })
        .catch(err => res.json({ message: "Something Went Wrong", error: err}))
}
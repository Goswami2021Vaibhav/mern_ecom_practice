const { response } = require('../app')
const Product = require('../models/productModel')
const ErrorHandler = require('../utils/errorhandler')
const catchAsyncError = require('../middleware/catchAsyncError')

// create product  admin
exports.createProduct = catchAsyncError(async (req, res, next) => {
    const product = await Product.create(req.body)
    res.status(201).json({
        success: true,
        product
    })
})
// get all product admin 

exports.getAllProducts = async (req, res) => {
    const products = await Product.find()
    res.status(200).json({ success: true, products: products })
}

// update product admin 

exports.updateProduct = async (req, res) => {
    let product = await Product.findById(req.params.id)
    if (!product) {
        return next(new ErrorHandler("Product not found", 404))
    }

    product = await Product.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidator: true,
        useFindAndModify: false
    })

    res.status(200).json({
        success: true,
        product
    })
}

// get product details 


exports.getProductDetails = async (req, res, next) => {

    let product = await Product.findById(req.params.id)
    if (!product) {
        return next(new ErrorHandler("Product not found", 404))
    }
    res.status(200).json({
        success: true,
        product
    })

}

// delete product admin 

exports.deleteProduct = async (req, res, next) => {
    const product = await Product.findById(req.params.id)
    if (!product) {
        return next(new ErrorHandler("Product not found", 404))
    }

    await product.deleteOne()

    res.status(200).json({
        success: true,
        message: "Product deleted successfully",

    })
}
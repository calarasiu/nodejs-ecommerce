import  express  from "express";
import  asyncHandler from 'express-async-handler'
const router = express.Router()
import Product from '../models/productModel.js'


// @desc    Fetch all products
// @route   GET /api/products
// @access  Public
router.get('/', asyncHandler(async (req, res)=>{
    // even if products is just an array res.json is going to convert it to json
    const products = await Product.find()
    res.header("Access-Control-Allow-Origin", "*");
    res.json(products)
}))

// @desc    Fetch single product
// @route   GET /api/products/:id
// @access  Public
router.get('/:id', asyncHandler(async (req, res)=>{
    const product = await Product.findById(req.params.id)


    res.header("Access-Control-Allow-Origin", "*");
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); // If needed
    res.setHeader('Access-Control-Allow-Credentials', true);

    if(product){

        res.json(product)
    }else {
        // this will be thrown when the product id has a valid format but the product doesn't exist, otherwise will use the error we defined in the errorMiddleware file
        res.status(404)
        throw new Error('Product not found')
    }
}))


export default router
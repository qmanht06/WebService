const express = require('express')
const router = express.Router()

const Products = require('../models/Product')

// routes POST api/posts
// desc create Product
// access private
router.post('/', async (req, res) => {
    const { productName, productImage, productDescription, productPrice } = req.body

    // simple validation
    if (!productName || !productImage || !productDescription || !productPrice)
        return res.status(400).json({ success: false, message: 'All is requires' })

    try {
        const newProduct = new Products(productName, productImage, productDescription, productPrice)

        await newProduct.save()
        return res.status(500).json({
            success: true,
            message: 'Create new pproduct success',
            product: newProduct
        })

    } catch (error) {
        console.log(error.message);
    }
})

module.exports = router
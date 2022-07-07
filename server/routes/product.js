const express = require('express')
const router = express.Router()

const Products = require('../models/Product')

// routes POST api/posts
// desc create Product
// access private
router.post('/', async (req, res) => {
    const { productName, productImage, productDescription, productPrice, productCategory } = req.body

    // simple validation
    if (!productName || !productImage || !productDescription || !productPrice || !productCategory)
        return res.status(400).json({ success: false, message: 'All is requires' })

    try {
        const newProduct = new Products({ productName, productImage, productDescription, productPrice, productCategory, user: '6296db51a2628ee670ae2a59' })

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
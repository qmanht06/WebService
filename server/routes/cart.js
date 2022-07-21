require('dotenv').config()
const express = require('express')
const router = express.Router()
const argon2 = require('argon2')
const jwt = require('jsonwebtoken')
const Cart = require('../models/Cart')
const { protect } = require('../middlewares/authMiddleware')


// @route POST api/cart/create
// @desc Create cart
// @access public
router.get('/', protect, async (req, res) => {
    try {
        const cart = await Cart.find({ user: req.userId })
        if (!cart) {
            return res.status(400).json({
                success: false,
                message: 'Cart not found',

            })
        }
        return res.status(500).json({
            success: false,
            message: 'Cart not found',
            cart: cart
        })
    } catch (error) {

    }
})

// @route POST api/cart/create
// @desc Create cart
// @access public
router.post('/create', protect, async (req, res) => {
    try {
        const { productId, productName, productImage, productDescription, productPrice, color, size, quantity } = req.body
        const userID = req.userId
        const cartItem = await Cart.findOne({ productId, color, size, user: userID })
        if (!cartItem) {
            const newCart = new Cart({ productId, productName, productImage, productDescription, productPrice, color, size, quantity, user: userID })
            await newCart.save()
        }
        else {
            await Cart.updateOne({ productId, color, size, user: userID }, { productId, productName, productImage, productDescription, productPrice, color, size, quantity })
        }

        return res.status(500).json({
            success: true,
            message: 'Add product to cart success',
            cart: newCart
        })
    } catch (error) {
        console.log(error.message);
    }
})

module.exports = router
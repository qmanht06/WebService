require("dotenv").config();
const express = require("express");
const router = express.Router();
const argon2 = require("argon2");
const jwt = require("jsonwebtoken");
const Cart = require("../models/Cart");
const { protect } = require("../middlewares/authMiddleware");

// @route POST api/cart/create
// @desc Create cart
// @access public
router.post("/", async (req, res) => {
  console.log(req.body);
  try {
    const cart = await Cart.find({ user: req.body.userId });
    if (!cart) {
      return res.status(400).json({
        success: false,
        message: "Cart not found",
      });
    } else {
      return res.status(500).json({
        success: true,
        message: "Cart found",
        cart: cart,
      });
    }
  } catch (error) {
    console.log("Error");
  }
});

// @route POST api/cart/create
// @desc Create cart
// @access public
router.post("/create", async (req, res) => {
  // console.log(req.body.cartItem);
  console.log(req.body);
  try {
    const {
      _id,
      productName,
      productImage,
      productDescription,
      productPrice,
      color,
      size,
      quantity,
    } = req.body.cartItem;
    const userID = req.body.userID;
    const cartItem = await Cart.findOne({
      productId: _id,
      color,
      size,
      user: userID,
    });
    if (!cartItem) {
      const newCart = new Cart({
        productId: _id,
        productName,
        productImage,
        productDescription,
        productPrice,
        color,
        size,
        quantity,
        user: userID,
      });
      await newCart.save();
    } else {
      await Cart.updateOne(
        { _id, color, size, user: userID },
        {
          productId: _id,
          productName,
          productImage,
          productDescription,
          productPrice,
          color,
          size,
          quantity,
        }
      );
    }

    return res.status(500).json({
      success: true,
      message: "Add product to cart success",
      cart: newCart,
    });
  } catch (error) {
    console.log(error.message);
  }
});



module.exports = router;

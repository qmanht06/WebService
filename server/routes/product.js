const express = require("express");
const router = express.Router();

const Products = require("../models/Product");

// routes POST api/product/create
// desc create Product
// access private
router.post("/create", async (req, res) => {
    const {
        productName,
        productImage,
        productOldPrice,
        productPrice,
        productSale,
        productDescription,
        productCategory,
        productCountInStock,
        productRating,
        productNumReviews,
    } = req.body;

    // simple validation
    if (
        !productName ||
        !productImage ||
        !productOldPrice ||
        !productDescription ||
        !productPrice ||
        !productCategory ||
        !productSale ||
        !productCountInStock ||
        !productRating ||
        !productNumReviews
    )
        return res.status(400).json({ success: false, message: "All is requires" });

    try {
        const newProduct = new Products({
            productName,
            productImage,
            productOldPrice,
            productPrice,
            productSale,
            productDescription,
            productCategory,
            productCountInStock,
            productRating,
            productNumReviews,
        });

        await newProduct.save();
        return res.status(500).json({
            success: true,
            message: "Create new product success",
            product: newProduct,
        });
    } catch (error) {
        console.log(error.message);
    }
});

// routes GET api/product/
// desc gét all Product
// access private
router.post("/", async (req, res) => {
    try {
        const { page, limit } = req.body.pagination;
        console.log(page, limit);
        const data = Products.find()
            .limit(limit)
            .skip(limit * (page - 1));
        const result = await data;

        return res.status(200).json({
            success: true,
            message: "Get all products success",
            products: result,
        });
    } catch (error) {
        console.log(error.message);
    }
});

// routes GET api/product/:id
// desc gét one Product
// access private
router.get("/:id", async (req, res) => {
    try {
        const productID = req.params.id;
        const data = Products.find({ _id: productID });
        const result = await data;

        return res.status(200).json({
            success: true,
            message: "Get products success",
            products: result,
        });
    } catch (error) {
        console.log(error.message);
    }
});

// routes PATCH api/product/:id
// desc update one Product
// access private
router.patch("/:id", async (req, res) => {
    try {
        const productID = req.params.id;
        const newData = req.body;
        const oldData = await Products.findById(productID);
        for (key in newData) {
            if (newData[key] === "") newData[key] = oldData[key];
        }
        return res.status(200).json({
            success: true,
            message: "Update products success",
            products: newData,
        });
    } catch (error) {
        console.log(error.message);
    }
});

module.exports = router;

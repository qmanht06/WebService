const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Products = new Schema(
  {
    productName: {
      type: String,
    },
    productImage: {
      type: String,
    },
    productOldPrice: {
      type: String,
    },
    productPrice: {
      type: String,
    },
    productSale: {
      type: String,
    },
    productDescription: {
      type: String,
    },
    productCategory: {
      type: String,
    },
    productCountInStock: {
      type: String,
    },
    productRating: {
      type: String,
    },
    productNumReviews: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("products", Products);

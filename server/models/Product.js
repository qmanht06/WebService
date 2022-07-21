const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Products = new Schema(
  {
    productName: {
      type: String,
      default: ""
    },
    productImage: {
      type: String,
      default: ""
    },
    productOldPrice: {
      type: String,
      default: ""
    },
    productPrice: {
      type: String,
      default: ""
    },
    productSale: {
      type: String,
      default: ""
    },
    productDescription: {
      type: String,
      default: ""
    },
    productCategory: {
      type: String,
      default: ""
    },
    productCountInStock: {
      type: String,
      default: ""
    },
    productRating: {
      type: String,
      default: ""
    },
    productNumReviews: {
      type: String,
      default: ""
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("products", Products);

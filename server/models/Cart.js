const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CartItemSchema = new Schema(
  {
    productId: {
      type: String,
      required: true,
      unique: true,
    },
    productName: {
      type: String,
    },
    productImage: {
      type: String,
    },
    productDescription: {
      type: String,
    },
    productPrice: {
      type: String,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("products", CartItemSchema);

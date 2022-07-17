const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    userName: {
      type: String,
      required: true,
      default: "Anonymous",
    },
    password: {
      type: String,
      required: true,
    },
    fullName: {
      type: String,
      required: true,
      default: "Anonymous",
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    permission: {
      type: String,
      enum: ["User", "Admin"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("user", UserSchema);

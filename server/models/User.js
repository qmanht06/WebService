const mongoose = require("mongoose");
const brypt = require("bcryptjs");
const Schema = mongoose.Schema;

const UserChema = new Schema(
  {
    userName: {
      type: String,
      required: true,
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
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);


//Encrypt password when write in database
UserChema.pre("save", async function (next) {
  if (this.isModified("password")) {
    next();
  }

  const salt = await brypt.genSalt(10);
  this.password = await brypt.hash(this.password, salt);
});

module.exports = mongoose.model("user", UserChema);

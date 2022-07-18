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
      default: "User"
    },
  },
  {
    timestamps: true,
  }
);

//decrypt password
UserSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

//Encrypt password when write in database
UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

module.exports = mongoose.model("user", UserSchema);

const express = require("express");
const User = require("../models/user");
const generateToken = require("../utils/generateToken");
const asyncHandler = require("express-async-handler");

const { protect } = require("../middlewares/authMiddleware");

const router = express.Router();

//Register Controller
const registerUser = asyncHandler(async (req, res) => {
  const { userName, email, password, fullName } = req.body;

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("User Already Exists");
  }

  const user = await User.create({
    userName,
    email,
    password,
    fullName,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      userName: user.userName,
      email: user.email,
      //password: user.password,
      fullName: user.fullName,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Error Occured");
  }
});

//Log in controller
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      userName: user.userName,
      email: user.email,
      fullName: user.fullName,
      permission: user.permission,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid Email or Password!");
  }
});

//Update Profile controller
const updateUserProfile = asyncHandler(async (req, res) => {
  //Information in req.body
  const { userName, email, password, fullName } = req.body;
  const user = await User.findById(req.user._id);

  //From user find by Id from Token sent in headers, if this user exist, update this user information to information in req.body
  if (user) {
    user.userName = userName || user.userName;
    user.fullName = fullName || user.fullName;

    if (password) {
      user.password = password;
    }

    const updatedUser = await user.save();

    res.json({
      _id: updatedUser._id,
      userName: updatedUser.userName,
      email: updatedUser.email,
      fullName: updatedUser.fullName,
      token: generateToken(updatedUser._id),
    });
  } else {
    res.status(404);
    throw new Error("User not found!");
  }
});

router.route("/").post(registerUser);
router.route("/login").post(authUser);
router.route("/profile").post(protect, updateUserProfile);
module.exports = router;

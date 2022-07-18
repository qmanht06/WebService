const express = require("express");
const User = require("../models/user");
const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const { protect } = require("../middlewares/authMiddleware");

const router = express.Router();

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

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

// require('dotenv').config()
// const express = require('express')
// const router = express.Router()
// const argon2 = require('argon2')
// const jwt = require('jsonwebtoken')
// const User = require('../models/user')

// // @route POST api/auth/register
// // @desc Resgister user
// // @access public
// router.post('/register', async (req, res) => {
//     const formdata = req.body

//     // Check validation
//     if (!formdata.userName, !formdata.password, !formdata.fullName, !formdata.email) {
//         res.status(400).json({ success: false, message: "You is missing a field" })
//     }

//     try {
//         // Check for exitsting user
//         const user = await User.findOne({ userName: formdata.userName })

//         if (user)
//             return res.status(400).json({ success: false, message: "UserName already exitsting" })

//         // All good
//         const hasdpassword = await argon2.hash(formdata.password)
//         const newUser = new User({ userName: formdata.userName, password: hasdpassword, fullName: formdata.fullName, email: formdata.email, permission: formdata.permission || "User" })
//         await newUser.save()

//         // return token
//         const accessToken = jwt.sign({ userId: newUser._id }, process.env.ACCESS_TOKEN_SECRETE)
//         res.json({ success: true, message: "Register successfull", newUser })
//     } catch (error) {
//         console.log(error);
//         res.status(400).json({ success: false, message: "Internal server error" })
//     }
// })

// // @route POST api/auth/login
// // @desc Login user
// // @access public
// router.post('/login', async (req, res) => {
//     const formdata = req.body

//     // Check validation
//     if (!formdata.userName, !formdata.password) {
//         res.status(400).json({ success: false, message: "You is missing a username or password" })
//     }

//     try {
//         // Check for exitsting user
//         const user = await User.findOne({ userName: formdata.userName })

//         if (!user)
//             return res.status(500).json({ success: false, message: "incorrect username or password" })

//         // All good
//         const passwordVerify = await argon2.verify(user.password, formdata.password)
//         if (!passwordVerify)
//             return res.status(500).json({ success: false, message: "incorrect username or password" })

//         // return token
//         const accessToken = jwt.sign({ userId: user._id }, process.env.ACCESS_TOKEN_SECRETE)
//         res.json({ success: true, message: "Login successfull", accessToken })
//     } catch (error) {
//         console.log(error.message);
//         res.status(400).json({ success: false, message: "Internal server error" })
//     }
// })

module.exports = router;

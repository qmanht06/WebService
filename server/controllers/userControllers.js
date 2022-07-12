const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

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
      password: user.password,
      fullName: user.fullName,
      isAdmin: user.isAdmin,
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
      isAdmin: user.isAdmin,
    });
  } else {

    res.json({
     
      email: user.email,
      password: user.password,
      matchPassword:await user.matchPassword(password)
    });
    // res.status(400);
    // throw new Error("Invalid Email or Password!");
  }
});

module.exports = { registerUser, authUser };

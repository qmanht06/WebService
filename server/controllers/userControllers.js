const asyncHandler = require("express-async-handler");
const User = require("../models/User");
const registerUser = asyncHandler(async (req, res) => {
  const { userName, password, email, fullName } = req.body;

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
    res.status(400)
    throw new Error('Error Occured')
  }
});



module.exports = { registerUser };

import jwt from "jsonwebtoken";
import User from "../models/userModel.js";
import asyncHandler from "express-async-handler";

//Middleware to protect API from unauthorize access
//Whenever user log in, pass this function before they can get access to specific API
const protect = asyncHandler(async (req, res, next) => {
  let token;

  if (
    //check if authorization exists and start with a token start with "Bearer"
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      //check if token fit with JWT_SECRET in .env
      token = req.headers.authorization.split(" ")[1];

      //decodes token id
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      //if success, find information of user by Id EXCEPT the password, user pass through middleware and get sent to APIs
      req.user = await User.findById(decoded.id).select("-password");

      next();
    } catch (error) {
      //no authorize
      res.status(401);
      throw new Error("Not authorized, token failed");
    }
  }

  if (!token) {
    res.status(401);
    throw new Error("Not authorized, no token");
  }
});

export { protect };

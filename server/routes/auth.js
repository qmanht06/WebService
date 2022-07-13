require('dotenv').config()
const express = require('express')
const router = express.Router()
const argon2 = require('argon2')
const jwt = require('jsonwebtoken')
//const {registerUser} = require('../controllers/userControllers')
const User = require('../models/user')





// @route POST api/auth/register
// @desc Resgister user
// @access public
router.post('/register', async(req,res) => {
    const formdata = req.body

    // Check validation
    if (!formdata.userName, !formdata.password, !formdata.fullName, !formdata.email) {
        res.status(400).json({success: false, message: "You is missing a field"})
    }
    
    try {
        // Check for exitsting user
        const user = await User.findOne({userName: formdata.userName})
        
        if (user)
        return res.status(400).json({success: false, message: "UserName already exitsting"})

        // All good
        const hasdpassword = await argon2.hash(formdata.password)
        const newUser = new User({userName: formdata.userName, password: hasdpassword, fullName: formdata.fullName, email: formdata.email, permission: formdata.permission || "User"})
        await newUser.save()

        // return token
        const accessToken = jwt.sign({userId: newUser._id}, process.env.ACCESS_TOKEN_SECRETE)
        res.json({success: true, message: "Register successfull", newUser})
    } catch (error) {
        console.log(error);
        res.status(400).json({success: false, message: "Internal server error"})
    }
})

// @route POST api/auth/login
// @desc Login user
// @access public
router.post('/login', async(req,res) => {
    const formdata = req.body

    // Check validation
    if (!formdata.userName, !formdata.password) {
        res.status(400).json({success: false, message: "You is missing a username or password"})
    }
    
    try {
        // Check for exitsting user
        const user = await User.findOne({userName: formdata.userName})
        
        if (!user)
        return res.status(500).json({success: false, message: "incorrect username or password"})

        // All good
        const passwordVerify = await argon2.verify(user.password, formdata.password)
        if (!passwordVerify) 
        return res.status(500).json({success: false, message: "incorrect username or password"})

        // return token
        const accessToken = jwt.sign({userId: user._id}, process.env.ACCESS_TOKEN_SECRETE)
        res.json({success: true, message: "Login successfull", accessToken})
    } catch (error) {
        console.log(error);
        res.status(400).json({success: false, message: "Internal server error"})
    }
})

module.exports = router
require("dotenv").config();
const express = require("express");
const router = express.Router();
const agorn2 = require("argon2");
const jwt = require("jsonwebtoken");

const User = require("../models/User");
const verifyToken = require("../middleware/auth");

// @route GET api/auth
// @desc Check if user is logged in
// @access Public
router.get("/", verifyToken, async (req, res) => {
  try {
    const user = await User.findById(req.userId).select("-password");
    if (!user)
      return res.status(400).json({ success: false, msg: "User not found" });
    res.json({ success: true, user });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ success: false, msg: "Internal server error" });
  }
});

// @route POST api/users/register
// @desc Register user
// @access Public
router.post("/register", async (req, res) => {
  const { username, password, fullname } = req.body;
  if (!username || !password || !fullname)
    return res
      .status(400)
      .json({ success: false, msg: "Please enter all fields" });

  try {
    // Check for existing user
    const user = await User.findOne({ username });
    if (user)
      return res
        .status(400)
        .json({ success: false, msg: "User already exists" });
    //All good
    const hashedPassword = await agorn2.hash(password);
    const newUser = new User({ username, password: hashedPassword, fullname });
    await newUser.save();
    // Return token
    const accessToken = jwt.sign(
      { userId: newUser._id },
      process.env.ACCESS_TOKEN_SECRET
    );
    res.json({ success: true, msg: "User created successfully", accessToken });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ success: false, msg: "Internal server error" });
  }
});

// @route POST api/users/login
// @desc Login user
// @access Public
router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password)
    return res
      .status(400)
      .json({ success: false, msg: "Please enter all fields" });

  try {
    // Check for existing user
    const user = await User.findOne({ username });
    if (!user)
      return res
        .status(400)
        .json({ success: false, msg: "Incorrect username or password" });
    // Username found
    const passwordValid = await agorn2.verify(user.password, password);
    if (!passwordValid)
      return res
        .status(400)
        .json({ success: false, msg: "Incorrect username or password" });
    // All good
    // Return token
    const accessToken = jwt.sign(
      { userId: user._id },
      process.env.ACCESS_TOKEN_SECRET
    );
    res.json({
      success: true,
      msg: "User logged in successfully",
      accessToken,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ success: false, msg: "Internal server error" });
  }
});

// @route Get api/users
// @desc Get users
// @access Private
router.get("/user", verifyToken, async (req, res) => {
  try {
    const users = await User.findById(req.userId).select("-password");
    res.json({ success: true, users });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ success: false, msg: "Internal server error" });
  }
});
module.exports = router;

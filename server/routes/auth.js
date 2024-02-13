require("dotenv").config();
const express = require("express");
const router = express.Router();


const verifyToken = require("../middleware/auth");
const authController = require("../controller/authController");

// @route GET api/auth
// @desc Check if user is logged in
// @access Public
router.get("/", verifyToken, authController.getAuth);

// @route POST api/users/register
// @desc Register user
// @access Public
router.post("/register", authController.registerUser);

// @route POST api/users/login
// @desc Login user
// @access Public
router.post("/login", authController.loginUser);

// @route Get api/users
// @desc Get users
// @access Private
router.get("/user", verifyToken, authController.getUsers);
module.exports = router;

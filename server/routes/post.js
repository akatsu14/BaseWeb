const express = require("express");
const router = express.Router();
const verifyToken = require("../middleware/auth");
const postController = require("../controller/postController");
const Post = require("../models/Post");
const DeletedPost = require("../models/DeletedPost");

// @route GET api/posts
// @desc Get post
// @access Private

router.get("/", verifyToken, postController.getPost);

// @route POST api/posts
// @desc Create post
// @access Private
router.post("/", verifyToken, postController.createPost);

// @route PUT api/posts
// @desc Update post
// @access Private
router.put("/:id", verifyToken, postController.updatePost);

// @route DELETE api/posts
// @desc Delete post
// @access Private
router.delete("/:id", verifyToken, postController.deletePost);

module.exports = router;

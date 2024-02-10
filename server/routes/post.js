const express = require("express");
const router = express.Router();
const verifyToken = require("../middleware/auth");
const Post = require("../models/Post");

// @route GET api/posts
// @desc Get post
// @access Private

router.get("/", verifyToken, async (req, res) => {
  try {
    const posts = await Post.find({ user: req.userId }).populate("user", [
      "username",
    ]);
    res.json({ success: true, posts });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ success: false, msg: "Internal server error" });
  }
});

// @route POST api/posts
// @desc Create post
// @access Private
router.post("/", verifyToken, async (req, res) => {
  const { title, price, ngayMua, img, status } = req.body;
  if (!title)
    return res.status(400).json({ success: false, msg: "Title is required" });

  try {
    const newPost = new Post({
      title,
      price,
      ngayMua,
      img,
      status: status || "To Read",
      user: req.userId,
    });
    await newPost.save();
    res.json({ success: true, msg: "Happy readding!", post: newPost });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ success: false, msg: "Internal server error" });
  }
});

// @route PUT api/posts
// @desc Update post
// @access Private
router.put("/:id", verifyToken, async (req, res) => {
  const { title, price, ngayMua, img, status } = req.body;
  if (!title)
    return res.status(400).json({ success: false, msg: "Title is required" });

  try {
    let updatedPost = {
      title,
      price: price || "",
      ngayMua: ngayMua || "",
      img: img || "",
      status: status || "To Read",
    };
    const postUpdateCondition = { _id: req.params.id, user: req.userId };
    updatedPost = await Post.findOneAndUpdate(
      postUpdateCondition,
      updatedPost,
      { new: true }
    );
    // User not authorised to update post or post not found
    if (!updatedPost)
      return res.status(401).json({
        success: false,
        msg: "Post not found or user not authorised",
      });
    res.json({ success: true, msg: "Excellent choice!", post: updatedPost });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ success: false, msg: "Internal server error" });
  }
});

// @route DELETE api/posts
// @desc Delete post
// @access Private
router.delete("/:id", verifyToken, async (req, res) => {
  try {
    const postDeleteCondition = { _id: req.params.id, user: req.userId };
    const { title, price, ngayMua, img, status } = req.body;

    const deletedPost = await Post.findOneAndDelete(postDeleteCondition);
    // User not authorised or post not found
    if (!deletedPost)
      return res.status(401).json({
        success: false,
        msg: "Post not found or user not authorised",
      });
    res.json({ success: true, post: deletedPost });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ success: false, msg: "Internal server error" });
  }
});

module.exports = router;

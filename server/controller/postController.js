const Post = require("../models/Post");
const postController = {
  getPost: async (req, res) => {
    console.log("🚀 ~ getPost: ~ req:", req)
    try {
      const posts = await Post.find({ user: req.userId }).populate("user", [
        "username",
      ]);
      posts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      res.json({ success: true, posts });
    } catch (error) {
      console.log(error.message);
      res.status(500).json({ success: false, msg: "Internal server error" });
    }
  },
  createPost: async (req, res) => {
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
  },
  updatePost: async (req, res) => {
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
  },
  deletePost: async (req, res) => {
    try {
      const postDeleteCondition = { _id: req.params.id, user: req.userId };
      const posts = await Post.find(postDeleteCondition);
      console.log("🚀 ~ posts:", posts);
      const { title, price, ngayMua, img, status } = posts[0];
      const newDeletedPost = new DeletedPost({
        title,
        price,
        ngayMua,
        img,
        status: status || "To Read",
        user: req.userId,
        _id: req.params.id,
      });
      console.log("🚀 ~ router.delete ~ try {.newDeletedPost:", newDeletedPost);

      const deletedPost = await Post.findOneAndDelete(postDeleteCondition);
      // User not authorised or post not found
      if (!deletedPost)
        return res.status(401).json({
          success: false,
          msg: "Post not found or user not authorised",
        });
      res.json({ success: true, post: deletedPost });
      await newDeletedPost.save();
    } catch (error) {
      console.log(error.message);
      res.status(500).json({ success: false, msg: "Internal server error" });
    }
  },
};
module.exports = postController;

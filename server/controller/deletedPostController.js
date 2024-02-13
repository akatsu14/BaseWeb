const DeletedPost = require("../models/DeletedPost");

const deletedPostController = {
  getDeletedPost: async (req, res) => {
    try {
      const thirtyDaysAgo = new Date();
      thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
      const checkPostsToDelete = await DeletedPost.find({
        user: req.userId,
        deletedAt: { $lt: thirtyDaysAgo },
      }).populate("user", ["username"]);
      if (checkPostsToDelete.length > 0) {
        await DeletedPost.deleteMany({
          user: req.userId,
          deletedAt: { $lt: thirtyDaysAgo },
        });
      }
      const posts = await DeletedPost.find({
        user: req.userId,
        deletedAt: { $lt: new Date(), $gte: thirtyDaysAgo },
      }).populate("user", ["username"]);
      res.json({ success: true, posts });
    } catch (error) {
      console.log(error.message);
      res.status(500).json({ success: false, msg: "Internal server error" });
    }
  },
  createADeletedPost: async (req, res) => {
    const { title, price, _id, ngayMua, img, status } = req.body;
    try {
      const newDeletedPost = new DeletedPost({
        title,
        price,
        _id,
        ngayMua,
        img,
        status,
        user: req.userId,
      });
      console.log("🚀 ~ router.post ~ newDeletedPost:", newDeletedPost);
      await newDeletedPost.save();
      res.json({ success: true, msg: "Happy readding!", post: newDeletedPost });
    } catch (error) {
      console.log(error.message);
      res.status(500).json({ success: false, msg: "Internal server error" });
    }
  },
  deleteADeletedPost: async (req, res) => {
    console.log("🚀 ~ router.delete ~ req:", req);
    try {
      const postDeleteCondition = { _id: req.params.id, user: req.userId };
      const { isReversePost } = req.body;
      console.log("🚀 ~ router.delete ~ isReversePost:", isReversePost);
      if (isReversePost) {
        const reversePost = await DeletedPost.find(postDeleteCondition);
        console.log("🚀 ~ router.delete ~ reversePost:", reversePost);
        const { title, price, ngayMua, img, status, _id } = reversePost[0];
        const newPost = new Post({
          title,
          price,
          ngayMua,
          img,
          status,
          user: req.userId,
          _id,
        });
        await newPost.save();
      }
      const deletedPost = await DeletedPost.findOneAndDelete(
        postDeleteCondition
      );
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
  },
};
module.exports = deletedPostController;

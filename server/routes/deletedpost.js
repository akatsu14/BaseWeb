const express = require("express");
const router = express.Router();
const verifyToken = require("../middleware/auth");
const deletedPostController = require("../controller/deletedPostController");


// @route GET api/deletedposts
// @desc Get post
// @access Private

router.get("/", verifyToken, deletedPostController.getDeletedPost);

// @route POST api/deletedposts
// @desc Create post
// @access Private
router.post("/", verifyToken, deletedPostController.createADeletedPost);

// // @route DELETE api/deletedposts
// // @desc Delete post
// // @access Private
router.delete("/:id", verifyToken, deletedPostController.deleteADeletedPost);

module.exports = router;

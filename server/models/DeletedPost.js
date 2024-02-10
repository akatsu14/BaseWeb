const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Post = require("./Post");
// Create Schema
const DeletedPostSchema = new Schema({
  deletedAt: Date,
  posts: Schema.Types.String,
});
module.exports = DeletedPost = mongoose.model("deletedpost", DeletedPostSchema);

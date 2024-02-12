const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Post = require("./Post");
// Create Schema
const DeletedPostSchema = new Schema({
  deletedAt: { type: Date, default: Date.now },
  _id: {
    type: String,
    required: true,
  },
  title: {
    type: String,
  },
  price: {
    type: Number,
  },
  ngayMua: {
    type: Date,
  },
  img: {
    type: String,
  },
  status: {
    type: String,
    enum: ["To Read", "Reading", "Done"],
    default: "To Read",
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "users",
  },
});
module.exports = DeletedPost = mongoose.model("deletedpost", DeletedPostSchema);

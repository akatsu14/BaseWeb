const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const PostSchema = new Schema({
  title: {
    type: String,
    required: true,
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
    default: "public",
  },
  createdAt : {
    type: Date,
    default: Date.now
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "users",
  },
});
module.exports = Post = mongoose.model("posts", PostSchema);
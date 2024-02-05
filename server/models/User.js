const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema
const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  fullname: {
    type: String,
    required: false,
  },
  password: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = User = mongoose.model("users", UserSchema);

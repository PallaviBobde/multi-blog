// models/Post.js

const mongoose = require("mongoose");

// Define the schema for the blog post
const postSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  author: { type: String, required: true },
  imageLink: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

// Create a Mongoose model named 'Post' based on the defined schema
const Post = mongoose.model("Post", postSchema);

module.exports = Post;

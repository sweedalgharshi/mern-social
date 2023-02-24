const Post = require("../models/post.model");

async function createPost(req, res) {
  try {
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}

module.exports = {
  createPost,
};

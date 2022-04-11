const { Schema, model } = require("mongoose");
const commentSchema = require('./Comment');
const dateFormat = require("../utils/dateFormat");

const postSchema = new Schema(
  {
    postBody: {
      type: String,
      required: true,
      maxlength: 280,
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (timestamp) => dateFormat(timestamp),
    },
    comments: [commentSchema]
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

postSchema.virtual('commentCount').get(function() {
  return this.comments.length;
});

// const Post = model("Post", postSchema);

module.exports = postSchema;

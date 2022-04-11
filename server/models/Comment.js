const { Schema, model } = require("mongoose");
const replySchema = require("./Reply");
const dateFormat = require("../utils/dateFormat");

const commentSchema = new Schema(
  {
    commentBody: {
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
    replies: [replySchema],
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

replySchema.virtual('replyCount').get(function() {
  return this.replys.length;
});

const Comment = model("Comment", commentSchema);

module.exports = Comment;

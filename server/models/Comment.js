const { Schema, model } = require("mongoose");
// const commentSchema = require("./Comment");
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
<<<<<<< HEAD
    // replies: [
    //   {
    //     type: Schema.Types.ObjectId,
    //     ref: "Reply",
    //   },
    // ],
=======
>>>>>>> f7f1ee052749f4167f52ad6c87a0b81a7503a1e6
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

commentSchema.virtual("commentCount").get(function () {
  return this.comments.length;
});

// const Comment = model("Comment", commentSchema);

module.exports = commentSchema;

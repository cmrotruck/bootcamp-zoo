const { Schema, model } = require("mongoose");
const dateFormat = require("../utils/dateFormat");

const animalSchema = new Schema(
  {
    breed: {
      type: String,
      required: "You need to specify animal breed.",
      minlength: 1,
      maxlength: 75,
    },
    animalText: {
      type: String,
      required: "You need to describe the animal breed.",
      minlength: 1,
      maxlength: 1500,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (timestamp) => dateFormat(timestamp),
    },
    quantity: {
      type: Number,
      default: 1,
    },
    donationTotal: {
      type: Number,
      default: 0,
    },
    posts: [
      {
        type: Schema.Types.ObjectId,
        ref: "Post",
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

animalSchema.virtual("postCount").get(function () {
  return this.posts.length;
});

const Animal = model("Animal", animalSchema);

module.exports = Animal;

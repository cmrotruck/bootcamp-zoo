const { Schema, model } = require("mongoose");
const dateFormat = require("../utils/dateFormat");

const animalSchema = new Schema({
  breed: {
    type: String,
    required: "You need to specify animal breed.",
    minlength: 1,
    maxlength: 75,
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
});

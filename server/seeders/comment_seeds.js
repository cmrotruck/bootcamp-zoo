const { Comment } = require("../models");

const commentData = [
    {
        commentBody: "",
        username: "",
    }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
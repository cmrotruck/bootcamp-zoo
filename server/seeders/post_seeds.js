const { Post } = require("../models");

const postData = [
    {
        postBody: "",
        username: "",
    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
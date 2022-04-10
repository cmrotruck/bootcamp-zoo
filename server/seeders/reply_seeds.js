const { Reply } = require("../models");

const replyData = [
    {
        replyBody: "",
        username: "",
    }
];

const seedReplys = () => Reply.bulkCreate(replyData);

module.exports = seedReplys;
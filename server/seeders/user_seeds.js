const { User } = require("../models");

const userData = [
    {
        username: "",
        email: "",
        password: "",
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
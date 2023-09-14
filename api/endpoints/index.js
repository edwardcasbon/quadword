const word = require("./word");
const leaderboard = require("./leaderboard");
const user = require("./user");

const endpoints = [
    {
        path: "/word",
        router: word,
    }, {
        path: "/leaderboard",
        router: leaderboard,
    }, {
        path: "/user",
        router: user,
    },
];

module.exports = endpoints;

const word = require("./word");
const leaderboard = require("./leaderboard");
const user = require("./user");
const score = require("./score");

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
    }, {
        path: "/score",
        router: score,
    },
];

module.exports = endpoints;

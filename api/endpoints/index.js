const word = require("./word");
const leaderboard = require("./leaderboard");

const endpoints = [
    {
        path: "/word",
        router: word,
    }, {
        path: "/leaderboard",
        router: leaderboard,
    },
];

module.exports = endpoints;

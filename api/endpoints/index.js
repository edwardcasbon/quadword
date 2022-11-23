const word = require("./word");

const endpoints = [
    {
        path: "/word",
        router: word,
    },
];

module.exports = endpoints;

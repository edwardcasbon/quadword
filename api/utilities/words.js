const list = require("../lists/four.json");

const getRandomWord = () => {
    const randomMin = 0;
    const randomMax = list.length - 1;
    const randomIndex =
        Math.floor(Math.random() * (randomMax - randomMin + 1)) + randomMin;

    const randomWord = list[randomIndex];

    return {
        word: randomWord.word,
    };
};

const getWord = (word) => {
    const found = list.find((w) => w.word === word);
    if (found) {
        return {
            word: found.word,
        };
    }

    return false;
};

const getWordSuggestions = (word) => {
    return [];
};

module.exports = {
    getRandomWord,
    getWord,
};

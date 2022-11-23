const fs = require("fs");

const wordsPath = "/usr/share/dict/words";
const distPath = "./lists/";
const distRealPath = fs.realpathSync(__dirname + "/../" + distPath) + "/";
const lists = [
    {
        wordLength: 4,
        filename: "four.json",
    },
];

const buildList = (list) => {
    fs.readFile(wordsPath, "utf-8", (err, data) => {
        if (err) {
            console.error(err);
            process.exit(1);
        }

        // Filter out words that don't match the word length.
        const words = data
            .split(/\r?\n/)
            .filter((line) => line.length === list.wordLength);

        // Create the JSON to write to a file.
        const json = [];
        words.forEach((word) => {
            json.push({
                word: word.toLowerCase(),
            });
        });

        // Write the words, as JSON, to the file.
        fs.writeFile(
            distRealPath + list.filename,
            JSON.stringify(json),
            { flag: "w" },
            (err) => {
                if (err) {
                    console.error(err);
                } else {
                    console.log(`Wrote words to ${list.filename}.`);
                }
            }
        );
    });
};

lists.forEach((list) => buildList(list));

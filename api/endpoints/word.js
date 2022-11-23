const express = require("express");
const { getRandomWord, getWord } = require("../utilities/words");
const router = express.Router();

router.get("/", (req, res) => {
    res.json(getRandomWord());
});

router.get("/:word", (req, res) => {
    const word = getWord(req.params.word);

    if (word) {
        res.json(word);
    } else {
        res.status(404).json({
            code: 123,
            error: `Word "${req.params.word}" not found.`,
        });
    }
});

module.exports = router;

const express = require("express");
const { createScore } = require("../utilities/score");

const router = express.Router();

router.post("/", async (req, res) => {
    res.json(await createScore(req.body));
});

module.exports = router;
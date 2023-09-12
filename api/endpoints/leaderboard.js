const express = require("express");
const { getLeaderboard } = require("../utilities/leaderboard");
const router = express.Router();

router.get("/", (req, res) => {
    res.json(getLeaderboard());
});

module.exports = router;
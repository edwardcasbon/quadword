const express = require("express");
const { getLeaderboard } = require("../utilities/leaderboard");
const router = express.Router();

router.get("/", async (req, res) => {
    res.json(await getLeaderboard());
});

module.exports = router;
const express = require("express");
const { getTokenForUser } = require("../utilities/auth");
const router = express.Router();

router.get("/", async (req, res) => {
    const token = await getTokenForUser(req?.body?.user, req?.body?.key);
    if (token.token) {
        res.json(token);
    } else {
        res.status(400).json({
            code: 123,
            error: 'Key does not match user',
        });
    }
});

module.exports = router;
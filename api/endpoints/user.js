const express = require("express");
const { createUser, getUser, updateUser } = require("../utilities/user");

const router = express.Router();

router.get("/", async (req, res) => {
    res.json(await getUser({
        id: req.query.id
    }));
});

router.post("/", async (req, res) => {
    const user = await createUser(req.body);
    if (user) {
        res.json(user);
    } else {
        res.status(500).json({
            code: 123,
            error: "Couldn't create user",
        });
    }
});

router.put("/", async (req, res) => {
    res.json(await updateUser(req.query.id, req.body));
});

module.exports = router;
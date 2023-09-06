const express = require("express");

const app = express();
const port = 4000;

app.use(express.static("dist"));

app.get("/*", (req, res) => {
    res.sendFile(__dirname + "/dist/index.html");
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

const express = require("express");
const cors = require("cors");
const endpoints = require("./endpoints/index");

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

endpoints.forEach((endpoint) => {
    app.use(endpoint.path, endpoint.router);
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

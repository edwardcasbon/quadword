const express = require("express");
const endpoints = require("./endpoints/index");

const app = express();
const port = 3000;

endpoints.forEach((endpoint) => {
    app.use(endpoint.path, endpoint.router);
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

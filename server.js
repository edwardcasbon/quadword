const express = require("express");
const cors = require("cors");
const apiEndpoints = require("./api/endpoints/index");

const app = express();
const port = 4000;

app.use('/api', cors());
app.use('/api', express.json());
app.use('/api', express.urlencoded({extended: true}));

app.use(express.static("web/dist"));

apiEndpoints.forEach((endpoint) => {
    app.use(`/api${endpoint.path}`, endpoint.router);
})

app.get("/*", (req, res) => {
    res.sendFile(__dirname + "/web/dist/index.html");
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

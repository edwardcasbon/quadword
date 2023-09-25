const express = require("express");
const cors = require("cors");
const apiEndpoints = require("./api/endpoints/index");
const { authenticateRequest } = require("./api/utilities/auth");

const app = express();
const port = 4000;

app.use('/api', cors());
app.use('/api', express.json());
app.use('/api', express.urlencoded({extended: true}));

// Authenticate API requests
app.use('/api', async (req, res, next) => {
    if (req.path.match('/auth/')) {
        // Don't need to authenticate requests to get a token.
        next();
    } else {
        const isAuthenticated = await authenticateRequest(req);
        if (isAuthenticated) {
            next();
        } else {
            res.status(401).json({
                code: 123,
                error: 'Request unauthenticated',
            });
        }
    }
});

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

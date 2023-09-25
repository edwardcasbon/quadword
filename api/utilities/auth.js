const db = require("./db");
const randomstring = require("randomstring");
const crypto = require("crypto");

const authenticateRequest = async (req, res, next) => {
    if (req.path.match('/auth/')) {
        // Don't need to authenticate requests to get a token.
        next();
    } else {
        let authenticated = false;
        const token = req?.headers?.authorization?.split(' ')[1];

        if (token) {
            // Check if token is valid in the database.
            const query = `SELECT COUNT(id) AS count FROM api_tokens WHERE token=? LIMIT 1`;
            const results = await db.query(query, [token]);
            if (results[0]?.count === 1) {
                authenticated = true;
            }
        }

        if (authenticated) {
            next();
        } else {
            res.status(401).json({
                code: 123,
                error: 'Request unauthenticated',
            });
        }
    }
};

const getHashForUser = (record) => {
    const hash = crypto.createHash('md5')
        .update(`${record.key}:quadword`)
        .digest("hex");
    return hash;
};

const getTokenForUser = async (user = "", hashedKey = "") => {
    // Get api_key record from database for matching user
    const apiKeyRecord = await getApiKeyRecordForUser(user);
    if (!apiKeyRecord) return false;

    // Get hash for user using getHashForUser()
    const userHash = getHashForUser(apiKeyRecord);

    // Check if hashedKey === hash
    // If match then return token if has one, or generate and return that.
    // If no match then return false
    if (hashedKey !== userHash) return false;

    // Return the token, or create one and return that.
    const token = apiKeyRecord.token ?
        apiKeyRecord.token :
        await createTokenForUser(apiKeyRecord.user);

    return {token};
};

const createToken = () => {
    return randomstring.generate(32);
};

const createTokenForUser = async (user) => {
    const token = createToken();
    const query = `UPDATE api_tokens SET token=? WHERE user=? LIMIT 1`;
    await db.query(query, [token, user]);
    return token;
};

const getApiKeyRecordForUser = async (user = "") => {
    if (!user || user === "") return false;

    const query = `
        SELECT *
        FROM api_tokens
        WHERE user=?
    `;

    const records = await db.query(query, [user]);
    return (records.length > 0)
        ? [...records].shift()
        : false;
};

module.exports = {
    authenticateRequest,
    getTokenForUser,
};
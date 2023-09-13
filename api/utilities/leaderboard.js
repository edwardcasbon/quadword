const db = require("./db");

const getLeaderboard = async () => {
    const query = `
        SELECT scores.score, users.name
        FROM users, scores
        WHERE users.id = scores.user_id
        ORDER BY scores.score DESC
        LIMIT 10
    `;

    const leaders = await db.query(query);
    return leaders;
};

module.exports = {
    getLeaderboard,
};
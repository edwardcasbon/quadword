const db = require("./db");

const getScore = async id => {
    if (!id) return false;

    const scores = await db.query(`SELECT * FROM scores WHERE id=?`, [id]);
    return (scores.length > 0)
        ? [...scores].shift()
        : false;
};

const createScore = async score => {
    if (!score.user_id || !score.score) return false;

    const scoreInsert = await db.query(`
        INSERT INTO scores
        SET user_id=?, score=?
    `, [
        score.user_id,
        score.score,
    ]);

    if (scoreInsert.insertId) {
        return await getScore(scoreInsert.insertId);
    }

    return false;
};

module.exports = {
    getScore,
    createScore,
};
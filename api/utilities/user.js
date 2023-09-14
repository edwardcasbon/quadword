const db = require("./db");

const getUser = async user => {
    let sql = `SELECT * FROM users `;
    const params = [];

    if (user.id) {
        sql += 'WHERE id=?';
        params.push(user.id);
    } else if (user.email) {
        sql += 'WHERE email=?';
        params.push(user.email);
    }

    const users = await db.query(sql, params);
    return (users.length > 0)
        ? [...users].shift()
        : false;
};

const createUser = async user => {

    // If email is set, then try and get user from email, otherwise create new
    // user.
    if (user.email) {
        const userRecord = await db.query(`
            SELECT *
            FROM users
            WHERE email=?
        `, [
            user.email,
        ]);

        if (userRecord.length > 0) return [...userRecord].shift();
    }

    const userInsert = await db.query(`
        INSERT INTO users
        SET name = ?, email = ?
    `, [
        user.name,
        user.email ?? null,
    ]);

    if (userInsert.insertId) {
        return await getUser({
            id: userInsert.insertId,
        })
    }

    return false;
};

const updateUser = async (id = 0, data = {}) => {
    if (id === 0) return false;

    let sql = `UPDATE users SET `;
    sql += Object.keys(data).map(k => `${k}=?`).join(',');
    sql += ` WHERE id=?`;

    await db.query(sql, [...Object.values(data), id]);

    return await getUser({id});
};

module.exports = {
    getUser,
    createUser,
    updateUser,
};
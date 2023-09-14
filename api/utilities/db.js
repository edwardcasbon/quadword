const mysql = require("mysql2");

const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "root",
    database: "quadword",
});

const poolPromise = pool.promise();

const query = async (query = "", args = []) => {
    try {
        const [records] = await poolPromise.query(query, args);
        return records;
    } catch (error) {
        console.error(`Couldn't do query: ${error}`);
        return [];
    }
};

module.exports = {
    query,
};
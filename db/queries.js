const pool = require("./pool");

async function getMessages() {
  const { rows } = await pool.query("SELECT * FROM messages");
  return rows;
}

async function insertMessage(author, message) {
  const { rows } = await pool.query(
    "INSERT INTO messages (user_name, text) VALUES ($1, $2) RETURNING *",
    [author, message]
  );
  return rows[0];
}

module.exports = { getMessages, insertMessage };

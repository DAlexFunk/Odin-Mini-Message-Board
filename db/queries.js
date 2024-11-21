const pool = require("./pool");

async function getAllMessages() {
  const { rows } = await pool.query("SELECT * FROM messages");
  return rows;
}

async function getMessageByID(id) {
  const { rows } = await pool.query(
    "SELECT * FROM messages WHERE id = $1",
    [id]
  );
  return rows;
}

async function addMessageDB(message, author) {
  await pool.query(
    "INSERT INTO messages (message, user_name, added) VALUES ($1, $2, CURRENT_DATE)",
    [message, author]
  );
}

module.exports = { getAllMessages, getMessageByID, addMessageDB }
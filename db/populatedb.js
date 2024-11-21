require("dotenv").config();
const { Client } = require("pg");
const sql = `
CREATE TABLE IF NOT EXISTS messages (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    message VARCHAR ( 255 ),
    user_name VARCHAR ( 255 ),
    added DATE
);

INSERT INTO messages (message, user_name, added)
VALUES
    ('Hi There!', 'Amando', CURRENT_DATE),
    ('Hello World!', 'Charles', CURRENT_DATE);
`;

async function main() {
  console.log("Sending...");
  const client = new Client({
    connectionString: process.env.DB_CONNECTION_STRING,
  });

  await client.connect();
  await client.query(sql);
  await client.end();
  console.log("done");
}

main();
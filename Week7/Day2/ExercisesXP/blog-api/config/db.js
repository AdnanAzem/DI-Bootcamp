require("dotenv").config();
const knex = require('knex');

const db = knex({
    client: "pg",
    connection: {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      port: process.env.DB_PORT,
      ssl: { rejectUnauthorized: false }
    },
  });

// async function getVersion() {
//     try {
//         const result = await db.raw('SELECT version()');
//         console.log(result.rows);
//     }
//     catch (error) {
//         console.log(error);
//     }
// }

// getVersion();

module.exports = db;

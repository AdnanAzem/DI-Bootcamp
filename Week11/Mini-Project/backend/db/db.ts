import knex from "knex";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();
const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD, PGPORT } = process.env;

// Initialize Knex for PostgreSQL
const db = knex({
  client: "pg",
  connection: {
    host: PGHOST,
    user: PGUSER,
    password: PGPASSWORD,
    database: PGDATABASE,
    ssl: { rejectUnauthorized: false },
  },
});

export { db };

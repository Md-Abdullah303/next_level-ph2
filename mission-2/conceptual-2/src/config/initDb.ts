import { pool } from "./db";

const createTableQuery = `
    CREATE TABLE IF NOT EXISTS users(
    id SERIAL PRIMARY KEY, 
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    role VARCHAR(25) CHECK (role IN ('admin', 'member')) DEFAULT 'member',
    is_active BOOLEAN DEFAULT true,

    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()

    );
`;

export const initDB = async () => {
  await pool.query(createTableQuery);
  console.log("Database table created!");
};

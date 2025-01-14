import { Pool } from "pg";

let global_pool: Pool;

export function getDb() {
  if (!global_pool) {
    const connectionString = process.env.POSTGRES_URL;
    
    if (!connectionString) {
      throw new Error('Database connection string is not configured');
    }

    global_pool = new Pool({
      connectionString,
      ssl: {
        rejectUnauthorized: false
      }
    });
  }

  return global_pool;
}
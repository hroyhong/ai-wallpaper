import { Pool } from "pg";

let global_pool: Pool | null = null;

export function getDb() {
  try {
    if (!global_pool) {
      const connectionString = process.env.POSTGRES_URL;
      console.log('Attempting database connection...');
      
      if (!connectionString) {
        throw new Error('Database connection string is not configured');
      }

      global_pool = new Pool({
        connectionString,
        ssl: {
          rejectUnauthorized: false
        },
        max: 20,
        idleTimeoutMillis: 30000,
        connectionTimeoutMillis: 2000,
      });

      // Test the connection
      global_pool.on('error', (err) => {
        console.error('Unexpected error on idle client', err);
        global_pool = null;
      });
    }

    return global_pool;
  } catch (error) {
    console.error('Database connection error:', error);
    throw error;
  }
}
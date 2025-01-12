import { Pool } from "pg";

let global_pool: Pool;

export function getDb() {
 if (!global_pool) {
    const connectionString = process.env.POSTGRES_URL;
    console.log("connectionString", connectionString);

    global_pool = new Pool({
        connectionString: connectionString,
    });
 }

 return global_pool;
}
import { Beauty } from "@/types/beauty"
import { getDb } from "./db";
import { QueryResult, QueryResultRow } from "pg";
import { RolesAnywhere } from "aws-sdk";

export async function insertBeauty(beauty: Beauty) {
    const db = getDb();
    const res = await db.query(
        `INSERT INTO beauties 
            (user_email, img_description, img_size, img_url, llm_name, llm_params, created_at)
             VALUES
             ($1, $2, $3, $4, $5, $6, $7)`,
        [
            beauty.user_email, 
            beauty.img_description, 
            beauty.img_size, 
            beauty.img_url, 
            beauty.llm_name, 
            beauty.llm_params, 
            beauty.created_at
        ]
    );
    return res;
}


export async function getBeautiesCount(): Promise<number> {
  const db = getDb();
  const res = await db.query(`SELECT count(1) as count FROM beauties`);
  if (res.rowCount === 0) {
    return 0;
  }

  const { rows } = res;
  const row = rows[0];

  return row.count;
}

export async function getUserBeautiesCount(
  user_email: string
): Promise<number> {
  const db = getDb();
  const res = await db.query(
    `SELECT count(1) as count FROM beauties WHERE user_email = $1`,
    [user_email]
  );
  if (res.rowCount === 0) {
    return 0;
  }

  const { rows } = res;
  const row = rows[0];

  return row.count;
}

export async function getBeauties(
  page: number,
  limit: number
): Promise<Beauty[] | undefined> {
  try {
    if (page < 1) {
      page = 1;
    }
    if (limit <= 0) {
      limit = 50;
    }
    const offset = (page - 1) * limit;

    const db = getDb();
    if (!db) {
      throw new Error('Failed to connect to database');
    }

    console.log('Executing query with params:', { limit, offset });
    const res = await db.query(
      `select * from beauties limit $1 offset $2`,
      [limit, offset]
    );

    if (res.rowCount === 0) {
      return [];
    }

    const { rows } = res;
    let beauties: Beauty[] = []
    rows.forEach(row => {
      const beauty: Beauty = {
        user_email: row.user_email,
        img_description: row.img_description,
        img_size: row.img_size,
        img_url: row.img_url,
        llm_name: row.llm_name,
        llm_params: row.llm_params,
        created_at: row.created_at,
      }
      beauties.push(beauty)
    })
    return beauties;
  } catch (error) {
    console.error('Error in getBeauties:', error);
    throw error;
  }
}

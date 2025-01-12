import { Beauty } from "@/types/beauty"
import { getDb } from "./db";
import { QueryResult, QueryResultRow } from "pg";

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


// export async function getBeautiesCount(): Promise<number> {
//   const db = getDb();
//   const res = await db.query(`SELECT count(1) as count FROM beauties`);
//   if (res.rowCount === 0) {
//     return 0;
//   }

//   const { rows } = res;
//   const row = rows[0];

//   return row.count;
// }

// export async function getUserBeautiesCount(
//   user_email: string
// ): Promise<number> {
//   const db = getDb();
//   const res = await db.query(
//     `SELECT count(1) as count FROM beauties WHERE user_email = $1`,
//     [user_email]
//   );
//   if (res.rowCount === 0) {
//     return 0;
//   }

//   const { rows } = res;
//   const row = rows[0];

//   return row.count;
// }

// export async function getBeauties(
//   page: number,
//   limit: number
// ): Promise<Beauty[] | undefined> {
//   if (page < 1) {
//     page = 1;
//   }
//   if (limit <= 0) {
//     limit = 50;
//   }
//   const offset = (page - 1) * limit;

//   const db = getDb();
//   const res = await db.query(
//     `select b.*, u.email as user_email, u.nickname as user_name, u.avatar_url as user_avatar from beauties as b left join users as u on b.user_email = u.email order by b.created_at desc limit $1 offset $2`,
//     [limit, offset]
//   );
//   if (res.rowCount === 0) {
//     return undefined;
//   }

//   const beauties = getBeautiesFromSqlResult(res);

//   return beauties;
// }

// export function getWallpapersFromSqlResult(
//   res: QueryResult<QueryResultRow>
// ): Beauty[] {
//   if (!res.rowCount || res.rowCount === 0) {
//     return [];
//   }

//   const beauties: Beauty[] = [];
//   const { rows } = res;
//   rows.forEach((row) => {
//     const beauty = formatBeauty(row);
//     if (beauty) {
//       beauties.push(beauty);
//     }
//   });

//   return beauties;
// }

// export function formatBeauty(row: QueryResultRow): Beauty | undefined {
//   let beauty: Beauty = {
//     id: row.id,
//     user_email: row.user_email,
//     img_description: row.img_description,
//     img_size: row.img_size,
//     img_url: row.img_url,
//     llm_name: row.llm_name,
//     llm_params: row.llm_params,
//     created_at: row.created_at,
//   };

//   if (row.user_name || row.user_avatar) {
//     beauty.created_user = {
//       email: row.user_email,
//       nickname: row.user_name,
//       avatar_url: row.user_avatar,
//     };
//   }

//   try {
//     beauty.llm_params = JSON.parse(JSON.stringify(beauty.llm_params));
//   } catch (e) {
//     console.log("parse beauty llm_params failed: ", e);
//   }

//   return beauty;
// }

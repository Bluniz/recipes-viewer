import pg from 'pg'


export const client = new pg.Client({
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
  user: process.env.DATABASE_USER,
  password: String(process.env.DATABASE_PASSWORD),
  database: process.env.DATABASE_NAME
})


export async function Query (query, values) {
  const { rows } = await client.query(query, values)

  return rows
}

import { drizzle } from 'drizzle-orm/postgres-js';
import postgress from 'postgres';
import { env } from '../env.ts';
import { schema } from './schema/index.ts';

export const sql = postgress(env.DATABASE_URL);
export const db = drizzle(sql, {
  schema,
  casing: 'snake_case',
});

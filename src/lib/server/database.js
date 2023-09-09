import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import config from '../../../drizzle.config.json';
 
 
const client = postgres(config.dbCredentials.connectionString);
export const db = drizzle(client);
 
//const allUsers = await db.select().from(users);
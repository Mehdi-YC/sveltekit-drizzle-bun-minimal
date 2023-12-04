// place files you want to import through the `$lib` alias in this folder.
import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import { users } from './server/schema';
 
//const connectionString = "postgres://postgres:mysecretpassword@localhost:5432/test"
//const client = postgres(connectionString);
//const db = drizzle(client);
 
//const allUsers = await db.select().from(users);
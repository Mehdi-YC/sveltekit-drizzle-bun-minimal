import { drizzle } from 'drizzle-orm/postgres-js';
import { migrate } from 'drizzle-orm/postgres-js/migrator';
import postgres from 'postgres';

// for migrations
const migrationClient = postgres("postgres://postgres:mysecretpassword@localhost:5432/test", { max: 1 });
migrate(drizzle(migrationClient),{ migrationsFolder: "ERDP/src/migrations" })
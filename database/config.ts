import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';
import { users } from './schemas/users';

const client = new Pool({ connectionString: process.env.AUTH_DRIZZLE_URL! });

export const db = drizzle(client, {
  schema: {
    users: users,
  },
});

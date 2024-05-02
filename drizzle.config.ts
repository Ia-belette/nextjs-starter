import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  // https://www.digitalocean.com/community/tools/glob for more info on glob patterns
  schema: './database/schemas/**/*.ts',
  out: './drizzle',
  driver: 'pg',
  dbCredentials: {
    connectionString: process.env.AUTH_DRIZZLE_URL!,
  },
  verbose: true,
  strict: true,
});

import * as dotenv from 'dotenv';
import type {Config} from 'drizzle-kit'


dotenv.config();

export default {
    schema: "./src/db/schema.ts",
    out: "./src/db/migrations",
    dialect: "postgresql",
    dbCredentials: {
        url: process.env.DATABASE_URL!
    },
    migrations: {
        table: "drizzle_migrations"
    },
    strict: true,
    verbose: true
} satisfies Config;
import { boolean, integer, pgTable, serial, text, timestamp, varchar } from "drizzle-orm/pg-core";


export const users = pgTable('users', { 
  id: serial('id').primaryKey().notNull(),
  email: varchar('email').notNull().unique(),
  passwordHash: text('password_hash').notNull(),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow() 
});

const refreshTokens = pgTable('refresh_tokens', {
  id: serial('id').primaryKey().notNull(),
  userId: integer('user_id').references(() => users.id, { onDelete: "cascade" }),
  tokenHash: text('token_hash').notNull(),
  expiresAt: timestamp('expires_at', { withTimezone: true }).notNull(),
  revoked: boolean('revoked').default(false),
  createdAt: timestamp('created_at').defaultNow()
});
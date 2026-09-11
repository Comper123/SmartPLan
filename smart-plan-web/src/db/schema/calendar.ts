import { integer, pgTable, serial } from "drizzle-orm/pg-core";
import { users } from "./users";

export const calendars = pgTable('calendar', {
  id: serial('id').primaryKey().notNull(),
  ownerId: integer('owner_id').references(() => users.id, { onDelete: "cascade" })
})
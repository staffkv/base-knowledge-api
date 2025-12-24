import {
  boolean,
  jsonb,
  numeric,
  pgTable,
  serial,
  text,
  timestamp,
} from 'drizzle-orm/pg-core'

export const menu = pgTable('menu', {
  id: serial().primaryKey(),
  name: text().notNull().unique(),
  category: text().notNull(),
  description: text(),
  hasVariation: boolean().default(false),
  priceBase: numeric(),
  variations: jsonb(),
  active: boolean().default(true),
  createdAt: timestamp().defaultNow(),
})

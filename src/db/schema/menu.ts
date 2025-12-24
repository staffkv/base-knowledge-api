import { boolean, jsonb, numeric, pgTable, text, timestamp } from 'drizzle-orm/pg-core'
import { uuidv7 } from 'uuidv7'

export const menu = pgTable('menu', {
  id: text()
    .primaryKey()
    .$default(() => uuidv7()),
  nome: text('nome').notNull().unique(),
  category: text('categoria').notNull(),
  description: text('descricao'),
  has_variations: boolean('possui_variacoes').default(false),
  base_price: numeric('preco_base', {
    precision: 10,
    scale: 2,
  }),
  variations: jsonb('variacoes')
    .$type<Record<string, { preco: number; descricao?: string }>>(),
  active: boolean('ativo')
    .notNull()
    .default(true),
  created_at: timestamp('criado_em', {
    withTimezone: false,
  })
    .notNull()
    .defaultNow(),
})

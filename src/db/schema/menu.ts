import { pgTable, text } from 'drizzle-orm/pg-core'
import { uuidv7 } from 'uuidv7'

export const menu = pgTable('menu', {
  id: text()
    .primaryKey()
    .$default(() => uuidv7()),
})

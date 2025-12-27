import { pgTable, serial, text, timestamp, varchar } from 'drizzle-orm/pg-core'

export const chatMessages = pgTable('chat_messages', {
  id: serial('id').primaryKey(),

  sessionId: varchar('session_id', { length: 64 }).notNull(),
  // telefone, remoteId ou conversationId do WhatsApp

  role: varchar('role', { length: 10 }).notNull(),
  // 'human' | 'assistant' | 'system'

  content: text('content').notNull(),

  createdAt: timestamp('created_at').defaultNow(),
})

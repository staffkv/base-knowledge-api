import { asc, eq } from 'drizzle-orm'
import { db } from '@/db'
import { chatMessages } from '@/db/schema'

export async function getChatHistory(sessionId: string) {
  return db
    .select({
      role: chatMessages.role,
      content: chatMessages.content,
    })
    .from(chatMessages)
    .where(eq(chatMessages.sessionId, sessionId))
    .orderBy(asc(chatMessages.createdAt))
    .limit(10)
}

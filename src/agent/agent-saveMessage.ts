import { db } from "@/db";
import { chatMessages } from "@/db/schema";

export async function saveChatMessage(
  sessionId: string,
  role: 'human' | 'assistant',
  content: string,
) {
  await db.insert(chatMessages).values({
    sessionId,
    role,
    content,
  })
}

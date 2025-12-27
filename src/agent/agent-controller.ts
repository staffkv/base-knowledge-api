import type { FastifyInstance } from 'fastify'
import type { ZodTypeProvider } from 'fastify-type-provider-zod'
import { getChatHistory } from './agent-chatMemory'
import { saveChatMessage } from './agent-saveMessage'
import { agent } from './create-agent'

export async function agentController(app: FastifyInstance) {
  app
    .withTypeProvider<ZodTypeProvider>()
    .post('/chat', async (request, reply) => {
      const { message, sessionId } = request.body as { message: string, sessionId: string }
      const history = await getChatHistory(sessionId)
      const state = await agent.invoke({
        messages: [
          ...history,
          { role: 'human', content: message }
        ],
      })

      const lastMessage = state.messages[state.messages.length - 1]
      const assistantText = lastMessage.content

      await saveChatMessage(sessionId, 'human', message)
      await saveChatMessage(sessionId, 'assistant', assistantText.toString())

      return reply.send({ message: assistantText })
    })
}

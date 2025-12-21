import type { FastifyInstance } from 'fastify'
import type { ZodTypeProvider } from 'fastify-type-provider-zod'
import { agent } from './create-agent'

export async function agentController(app: FastifyInstance) {
  app
    .withTypeProvider<ZodTypeProvider>()
    .post('/chat', async (request, reply) => {
      const { message } = request.body as { message: string }

      const responseMessage = await agent.invoke({
        messages: [{ role: 'user', content: message }],
      })

      return reply.send({ message: responseMessage })
    })
}

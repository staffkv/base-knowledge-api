import { createAgent } from 'langchain'
import { contextSchema } from './agent-contextSchema'
import { modelGroq } from './agent-model'
import { prompt } from './agent-prompt'
import { getMenuTool } from './agent-tools'

export const agent = createAgent({
  model: modelGroq,
  systemPrompt: prompt,
  tools: [getMenuTool],
  // contextSchema: contextSchema,
})

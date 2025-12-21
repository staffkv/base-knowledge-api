import { createAgent } from 'langchain'
import { modelGroq } from './agent-model'
import { prompt } from './agent-prompt'

export const agent = createAgent({
  model: modelGroq,
  systemPrompt: prompt,
})

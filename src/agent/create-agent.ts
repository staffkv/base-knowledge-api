import { createAgent } from 'langchain'
import { modelGroq } from './agent-model'
import { prompt } from './agent-prompt'
import { getMenuTool } from './agent-tools'

export const agent = createAgent({
  model: modelGroq,
  systemPrompt: prompt,
  tools: [getMenuTool],
})

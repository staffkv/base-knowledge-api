import { ChatAnthropic } from '@langchain/anthropic'
import { ChatGroq } from '@langchain/groq'
import { ChatOpenAI } from '@langchain/openai'

export const modelGpt = new ChatOpenAI({
  model: 'GPT-4.1 mini',
  temperature: 0.7,
  openAIApiKey: process.env.OPENAI_API_KEY,
})

export const modelAnthropic = new ChatAnthropic({
  model: 'claude-sonnet-4-0',
  temperature: 0.7,
  anthropicApiKey: process.env.ANTHROPIC_API_KEY,
})


export const modelGroq = new ChatGroq({
  model: 'qwen/qwen3-32b',
  apiKey: process.env.GROQ_API_KEY,
  temperature: 0.7,
  maxRetries: 2,
})

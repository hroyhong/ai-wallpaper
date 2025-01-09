import OpenAI from "openai";

export function getOpenaiClient(): OpenAI {
  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });
  
  return openai;
}

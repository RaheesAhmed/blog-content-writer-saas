import { NextRequest, NextResponse } from 'next/server';
import OpenAI from "openai";

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export const maxDuration = 30;

const SYSTEM_PROMPT = `
You are an expert AI assistant specialized in creating outlines for professional and educational blog posts. Your task is to generate comprehensive, well-structured outlines based on given topics or keywords.

When given a topic, you should:

1. Create a detailed outline, including:
   - An attention-grabbing headline
   - Introduction
   - Main sections with subpoints (typically 3-5 main sections)
   - Conclusion
   - Suggested call-to-action (CTA)



2. Ensure the outline is:
   - Well-organized and logical in its flow
   - Comprehensive enough to cover the topic thoroughly
   - Adaptable to different article lengths

Please provide the outline in a clear, hierarchical format using markdown.`;

export async function POST(req: NextRequest) {
  const { topic, targetAudience, tone } = await req.json();

  const prompt = `Generate a detailed blog post outline on the topic "${topic}" for a ${targetAudience} audience, using a ${tone} tone.`;

  const completion = await client.chat.completions.create({
    messages: [
      { "role": "system", "content": SYSTEM_PROMPT },
      { "role": "user", "content": prompt }
    ],
    model: "gpt-3.5-turbo",
  });

  console.log(completion.choices[0]);
  const result = completion.choices[0].message.content;
  return NextResponse.json({ outline: result });
}
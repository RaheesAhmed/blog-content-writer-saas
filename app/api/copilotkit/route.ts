import { NextApiRequest, NextApiResponse } from "next";
import {
  CopilotRuntime,
  OpenAIAdapter,
  copilotRuntimeNextJSPagesRouterEndpoint,
} from "@copilotkit/runtime";
import OpenAI from "openai";
 import dotenv from "dotenv";

 
dotenv.config();
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
 
export const POST = async (req: NextApiRequest, res: NextApiResponse) => {
  const serviceAdapter = new OpenAIAdapter({ openai });
  const runtime = new CopilotRuntime();
 
  const handleRequest = copilotRuntimeNextJSPagesRouterEndpoint({
    endpoint: "/api/copilotkit",
    runtime,
    serviceAdapter,
  });
 
  return await handleRequest(req, res);
};
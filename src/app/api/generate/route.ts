import { convertToModelMessages, InferUITools, stepCountIs, streamText, tool, UIDataTypes, UIMessage } from "ai";
import { google } from "@ai-sdk/google";
import { getSystemPrompt } from "@/lib/proposal-system-prompt";
import { z } from "zod";
import { convertToUnicode } from "./to-unicode";

const proposalTools = {
  applyBold: tool({
    description: "Converts a phrase into Unicode Bold. Use for results and keywords.",
    inputSchema: z.object({ text: z.string() }),
    execute: async ({ text }: { text: string }) =>
      convertToUnicode(text, 0x1d400, 0x1d41a, 0x1d7ce),
  }),
  applyBoldItalic: tool({
    description: "Converts a phrase into Unicode Bold-Italic. Use ONLY for the most important takeaway.",
    inputSchema: z.object({ text: z.string() }),
    execute: async ({ text }: { text: string }) =>
      convertToUnicode(text, 0x1d468, 0x1d482, 0x1d7ce),
  }),
};

export type ChatTools = InferUITools<typeof proposalTools>;
export type ChatMessage = UIMessage<never, UIDataTypes, ChatTools>;

export async function POST(req: Request) {
  try {
    const { messages }: { messages: ChatMessage[] } = await req.json();

    const result = streamText({
      model: google("gemini-3-pro-preview"),
      system: getSystemPrompt(),
      messages: await convertToModelMessages(messages),
      tools: proposalTools,
      stopWhen: stepCountIs(3),
    });

    return result.toUIMessageStreamResponse();
  } catch (error) {
    console.error(error);
    return new Response("Internal Server Error", { status: 500 });
  }
}
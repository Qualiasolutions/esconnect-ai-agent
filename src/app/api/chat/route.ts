﻿// ESConnect AI Agent API

import { OpenAIStream, StreamingTextResponse } from 'ai';
import { Configuration, OpenAIApi } from 'openai';

// Create an OpenAI API client
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

// CORS headers
export const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
};

export async function OPTIONS() {
  return new Response('OK', { headers: corsHeaders });
}

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    // Ensure API key exists
    if (!configuration.apiKey) {
      return new Response(
        JSON.stringify({
          error: 'OpenAI API key not configured',
        }),
        { status: 500 }
      );
    }

    // Create system message for energy sector expertise
    const systemMessage = {
      role: 'system',
      content: `You are Qualia, an AI assistant specialized in the energy sector. 
      You provide expert insights on energy markets, renewable energy, sustainability, 
      regulatory compliance, and energy efficiency. Your responses are concise, 
      accurate, and tailored to energy professionals. When you don't know something, 
      you acknowledge it rather than making up information.`,
    };

    // Add system message to the beginning of the messages array
    const augmentedMessages = [systemMessage, ...messages];

    // Request the OpenAI API for the response
    const response = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      stream: true,
      temperature: 0.7,
      messages: augmentedMessages,
    });

    // Convert the response into a friendly text-stream
    const stream = OpenAIStream(response);

    // Return a StreamingTextResponse, which can be consumed by the client
    return new StreamingTextResponse(stream, { headers: corsHeaders });
  } catch (error) {
    console.error('Error in chat API:', error);
    return new Response(
      JSON.stringify({
        error: 'An error occurred during your request.',
      }),
      { status: 500, headers: corsHeaders }
    );
  }
}

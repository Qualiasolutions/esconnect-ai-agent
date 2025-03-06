// ESConnect AI Agent API

import OpenAI from 'openai';

// Create an OpenAI API client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

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
    if (!process.env.OPENAI_API_KEY) {
      return new Response(
        JSON.stringify({
          error: 'OpenAI API key not configured',
        }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
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

    // Request the OpenAI API for the response (non-streaming)
    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      temperature: 0.7,
      messages: augmentedMessages,
    });

    // Return the response
    return new Response(
      JSON.stringify({ 
        role: 'assistant',
        content: response.choices[0].message.content 
      }),
      { 
        headers: { 
          ...corsHeaders, 
          'Content-Type': 'application/json' 
        } 
      }
    );
  } catch (error) {
    console.error('Error in chat API:', error);
    return new Response(
      JSON.stringify({
        error: 'An error occurred during your request.',
      }),
      { 
        status: 500, 
        headers: { 
          ...corsHeaders, 
          'Content-Type': 'application/json' 
        } 
      }
    );
  }
}

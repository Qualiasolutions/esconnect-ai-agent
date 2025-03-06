/**
 * Mistral AI integration for ESConnect AI Agent
 */

type MistralMessage = {
  role: 'user' | 'assistant' | 'system';
  content: string;
};

type MistralCompletionOptions = {
  model: string;
  messages: MistralMessage[];
  temperature?: number;
  maxTokens?: number;
  topP?: number;
  stream?: boolean;
};

type MistralCompletionResponse = {
  id: string;
  object: string;
  created: number;
  model: string;
  choices: {
    index: number;
    message: MistralMessage;
    finish_reason: string;
  }[];
  usage: {
    prompt_tokens: number;
    completion_tokens: number;
    total_tokens: number;
  };
};

export class MistralClient {
  private apiKey: string;
  private baseUrl: string = 'https://api.mistral.ai/v1';

  constructor(apiKey: string) {
    this.apiKey = apiKey;
  }

  async createChatCompletion(
    options: MistralCompletionOptions
  ): Promise<MistralCompletionResponse> {
    try {
      const response = await fetch(`${this.baseUrl}/chat/completions`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.apiKey}`,
        },
        body: JSON.stringify({
          model: options.model,
          messages: options.messages,
          temperature: options.temperature ?? 0.7,
          max_tokens: options.maxTokens,
          top_p: options.topP,
          stream: options.stream ?? false,
        }),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(`Mistral API error: ${JSON.stringify(error)}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Error calling Mistral API:', error);
      throw error;
    }
  }

  /**
   * Creates a streaming chat completion
   * @param options Completion options
   * @returns A readable stream of the response
   */
  async createStreamingChatCompletion(
    options: MistralCompletionOptions
  ): Promise<ReadableStream> {
    try {
      const response = await fetch(`${this.baseUrl}/chat/completions`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.apiKey}`,
        },
        body: JSON.stringify({
          model: options.model,
          messages: options.messages,
          temperature: options.temperature ?? 0.7,
          max_tokens: options.maxTokens,
          top_p: options.topP,
          stream: true,
        }),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(`Mistral API error: ${JSON.stringify(error)}`);
      }

      return response.body as ReadableStream;
    } catch (error) {
      console.error('Error calling Mistral API:', error);
      throw error;
    }
  }
} 
const { Configuration, OpenAIApi } = require('openai');
const keys = require('../config/keys');

class OpenAI {
  static getInstance() {
    return new OpenAI({
      apiKey: keys.openaiApiKey,
    });
  }

  constructor(config) {
    this.configuration = new Configuration(config);
    this.openai = new OpenAIApi(this.configuration);
  }

  async createChatCompletion(message, temperature) {
    const chatCompletion = await this.openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'system',
          content: 'You are a helpful assistant.',
        },
        { role: 'user', content: message },
      ],
      temperature,
    });

    return chatCompletion;
  }
}

module.exports = OpenAI.getInstance();

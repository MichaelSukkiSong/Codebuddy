const openai = require('../services/openai');
const { parsedMessages } = require('../utils/parseMessage');

module.exports = (app) => {
  app.post('/api/chat/completions/:section', async (req, res) => {
    const {
      language,
      framework,
      messages,
      temperature,
      changedlanguage,
      categories,
      categoryId,
    } = req.body.messages;
    // console.log(categories, categoryId);

    const { section } = req.params;

    if (messages.length === 0) {
      res.status(400).json({
        error: {
          message: 'Please enter a valid message',
        },
      });
      return;
    }

    const message = parsedMessages(
      section,
      language,
      framework,
      messages,
      changedlanguage,
      categories,
      categoryId
    );
    // console.log('message: ', message);

    try {
      const chatCompletion = await openai.createChatCompletion(
        message,
        temperature
      );

      // console.log(chatCompletion.data.choices[0].message);

      res.status(200).json({ results: chatCompletion.data, section });
    } catch (error) {
      if (error.response) {
        console.error(error.response.status, error.response.data);
        res.status(error.response.status).json(error.response.data);
      } else {
        console.error(`Error with OpenAI API request: ${error.message}`);
        res.status(500).json({
          error: {
            message: 'An error occurred during your request.',
          },
        });
      }
    }
  });
};

const mongoose = require('mongoose');
const requireAuth = require('../middlewares/requireAuth');

const Response = mongoose.model('responses');

module.exports = (app) => {
  app.get('/api/responses', requireAuth, async (req, res) => {
    const responses = await Response.find({ userId: req.user.id });
    // console.log(responses);

    res.status(200).json(responses);
  });

  app.get('/api/responses/:id', async (req, res) => {
    const response = await Response.findOne({
      _id: req.params.id,
      userId: req.user.id,
    });

    res.status(200).json(response);
  });

  app.post('/api/responses', async (req, res) => {
    //req.body === The chat completion object

    const response = new Response({
      section: req.body.section,
      userId: req.user.id,
      chatcompletionId: req.body.response.id,
      object: req.body.response.object,
      created: req.body.response.created,
      model: req.body.response.model,
      choices: [
        {
          index: req.body.response.choices[0].index,
          message: {
            role: req.body.response.choices[0].message.role,
            content: req.body.response.choices[0].message.content,
          },
          finish_reason: req.body.response.choices[0].finish_reason,
        },
      ],
      usage: {
        prompt_tokens: req.body.response.usage.prompt_tokens,
        completion_tokens: req.body.response.usage.completion_tokens,
        total_tokens: req.body.response.usage.total_tokens,
      },
    });
    await response.save();

    res.status(201).json(response);
  });

  app.delete('/api/responses/:id', async (req, res) => {
    await Response.findByIdAndDelete(req.params.id);
    res.status(204).json();
  });
};

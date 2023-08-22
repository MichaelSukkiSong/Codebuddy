const mongoose = require('mongoose');
const { Schema } = mongoose;

const responseSchema = new Schema({
  section: String,
  userId: String,
  chatcompletionId: String,
  object: String,
  created: Number,
  model: String,
  choices: [
    {
      index: Number,
      message: {
        role: String,
        content: String,
        // function_call: {
        //   name: String,
        //   arguments: String,
        // },
      },
      finish_reason: String,
    },
  ],
  usage: {
    prompt_tokens: Number,
    completion_tokens: Number,
    total_tokens: Number,
  },
});

mongoose.model('responses', responseSchema);

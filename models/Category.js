const mongoose = require('mongoose');
const { Schema } = mongoose;

const categorySchema = new Schema({
  id: String,
  userId: String,
  name: String,
  prompt: String,
});

mongoose.model('categories', categorySchema);

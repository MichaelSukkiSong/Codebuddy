const mongoose = require('mongoose');
const { Schema } = mongoose;

const categoriesSchema = new Schema({
  id: String,
  name: String,
  prompt: String,
});

mongoose.model('categories', categoriesSchema);

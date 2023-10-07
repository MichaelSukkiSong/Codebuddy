const mongoose = require('mongoose');
const requireAuth = require('../middlewares/requireAuth');

const Category = mongoose.model('categories');

module.exports = (app) => {
  app.get('/api/categories', requireAuth, async (req, res) => {
    const categories = await Category.find({
      userId: req.user.id,
    });

    res.status(200).json(categories);
  });

  app.get('/api/categories/:id', async (req, res) => {
    const category = await Category.findOne({
      id: req.params.id,
      userId: req.user.id,
    });

    res.status(200).json(category);
  });

  app.post('/api/categories', async (req, res) => {
    const category = new Category({
      id: req.body.id,
      userId: req.user.id,
      name: req.body.name,
      prompt: req.body.prompt,
    });
    await category.save();

    res.status(201).json(category);
  });

  app.delete('/api/categories/:id', async (req, res) => {
    await Category.findOneAndDelete({ id: req.params.id });

    res.status(204).json();
  });
};

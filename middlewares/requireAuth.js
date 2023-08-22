module.exports = requireAuth = (req, res, next) => {
  if (!req.user) {
    res.status(401).json({ message: 'You are not logged in' });
  }
  next();
};

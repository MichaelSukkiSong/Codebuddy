const passport = require('passport');
const mongoose = require('mongoose');
const crypto = require('crypto');

const User = mongoose.model('users');

module.exports = (app) => {
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email'],
    })
  );

  app.get(
    '/auth/google/callback',
    passport.authenticate('google', {
      failureRedirect: '/',
      failureMessage: true,
    }),
    (req, res) => {
      res.redirect('/playground');
    }
  );

  app.post('/api/signup', async (req, res, next) => {
    // console.log('*********req.body: *****', req.body);

    const salt = crypto.randomBytes(16);

    const hashedPassword = crypto.pbkdf2(
      req.body.password,
      salt.toString('hex'),
      310000,
      32,
      'sha256',
      async function (err, hashedPassword) {
        if (err) {
          return next(err);
        }

        try {
          const user = new User({
            username: req.body.username,
            password: hashedPassword.toString('hex'),
            salt: salt.toString('hex'),
          });
          await user.save();

          req.login(user, function (err) {
            if (err) {
              return next(err);
            }
            res.status(201).json({});
          });
        } catch (err) {
          return next(err);
        }
      }
    );
  });

  app.post(
    '/api/login',
    passport.authenticate('local', {
      successReturnToOrRedirect: '/',
      failureRedirect: '/',
      failureMessage: true,
    }),
    function (req, res) {
      res.redirect('/');
    }
  );

  app.post('/api/logout', (req, res) => {
    req.logout();
    res.redirect('/');
  });

  app.get('/api/current_user', (req, res) => {
    // console.log(req.session);
    res.send(req.user);
  });
};

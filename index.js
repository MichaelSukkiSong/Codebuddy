const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const cors = require('cors');
const keys = require('./config/keys');
require('./models/User');
require('./models/Response');
require('./services/passport');
require('./services/openai');
require('./middlewares/requireAuth');

const app = express();
app.use(express.json());

const corsOptions = {
  origin: true, //Configures the Access-Control-Allow-Origin CORS header.set origin to true to reflect the request origin, as defined by req.header('Origin'), or set it to false to disable CORS.
  credentials: true, //Configures the Access-Control-Allow-Credentials CORS header. Set to true to pass the header, otherwise it is omitted.
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

// cors
app.use(cors(corsOptions));

// Connect to DB
mongoose.connect(keys.mongoURI);

// cookie-based session
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey],
  })
);
app.use(passport.initialize());
app.use(passport.session());

// Routes
require('./routes/authRoutes')(app);
require('./routes/chatRoutes')(app);

// Protected Routes
app.use(requireAuth);
require('./routes/responsesRoutes')(app);

if (process.env.NODE_ENV === 'production') {
  // Express will serve up production assets
  // like our main.js file, or main.css file!
  app.use(express.static('codebuddy_client/build'));

  // Express will serve up the index.html file
  // if it doesn't recognize the route
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(
      path.resolve(__dirname, 'codebuddy_client', 'build', 'index.html')
    );
  });
}

// start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});

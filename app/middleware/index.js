const path = require('path');
const favicon = require('serve-favicon');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');

const compression = require('./compression');

const initMiddleware = (app) => {
  if (process.env.NODE_ENV === 'production') {
    app.use(helmet());
    compression(app);
  }
  app.use(cookieParser());

  app.use(favicon(path.join(__dirname, '..', '..', 'public', 'favicon.png')));
  app.set('view engine', 'pug');
  app.set('views', path.join(__dirname, '..', 'views'));
};

module.exports = { initMiddleware };

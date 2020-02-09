const publicRoutes = require('./public-routes');
const errors = require('../utils/errors');

module.exports = (app) => {
  app.use('/', publicRoutes);

  if (process.env.NODE_ENV === 'production') {
    app.set('trust proxy', 1);
  }

  app.use('*', errors.make404);
  app.use(errors.errorHandler);
};

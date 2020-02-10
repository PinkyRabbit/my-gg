const publicRoutes = require('./public-routes');
const authRoutes = require('./auth-routes');
const errors = require('../utils/errors');

module.exports = (app) => {
  app.use('/login', authRoutes);
  app.use('/', publicRoutes);

  if (process.env.NODE_ENV === 'production') {
    app.set('trust proxy', 1);
  }

  app.use('*', errors.make404);
  app.use(errors.errorHandler);
};

const createError = require('http-errors');

// eslint-disable-next-line no-unused-vars
const errorHandler = (err, req, res, next) => {
  const seo = {
    title: 'Упс...',
    description: 'Страница не существует или была перемещена. Попробуйте поискать её на сайте в другом месте.',
    mainImage: '/images/standard/404.jpg',
  };

  if (!err || !err.status) {
    err = createError(500, 'Unknown server error');
  }

  if (err.stack && process.env.NODE_ENV !== 'development') {
    delete err.stack;
  }

  seo.h1 = err.status === 404 ? 'Страница не существует!' : `Ошибка ${err.status}`;
  return res.status(err.status).render('error', { seo, error: err });
};

const make404 = (req, res, next) => next(createError(404, 'Not Found'));

module.exports = {
  errorHandler,
  make404,
};

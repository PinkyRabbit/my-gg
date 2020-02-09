const createError = require('http-errors');

const validatePageNumber = (req, res, next) => {
  if (!req.query || !req.query.page) {
    req.page = 0;
    return next();
  }

  const { page } = req.query;
  req.page = parseInt(page, 10);
  if (Number.isNaN(req.page) || req.page < 0 || page !== req.page.toString()) {
    const error = createError(400, 'Bad page number');
    return next(error);
  }

  return next();
};

module.exports = {
  validatePageNumber,
};

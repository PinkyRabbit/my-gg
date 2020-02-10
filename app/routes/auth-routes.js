const express = require('express');
const csrf = require('csurf');

const publicRouter = express.Router();

publicRouter.get('/', csrf({ cookie: true }), loginPage);

function loginPage(req, res) {
  // eslint-disable-next-line no-underscore-dangle
  const csrfToken = req.csrfToken();

  const seo = {
    title: 'Вход...',
    h1: 'Дорога в эхо',
    keywords: 'login',
    mainImage: '/images/standard/login.jpg',
    description: 'Страничка входа =) Только нафиг она вам сдалась-то?',
  };

  return res.render('login', {
    csrfToken,
    google: false,
    sidebar: false,
    seo,
    scripts: [
      'https://www.google.com/recaptcha/api.js',
    ],
  });
}

module.exports = publicRouter;

const express = require('express');

const articleController = require('../constrollers/article.controller');
const { validatePageNumber } = require('../utils/validators');

const publicRouter = express.Router();

publicRouter.get('/', validatePageNumber, getArticlesForMain);

async function getArticlesForMain(req, res) {
  const { page } = req;
  await articleController.getArticlesList(page, null);

  const title = page ? `Блог - страница ${page}` : 'Главная';
  const h1 = page ? `Страница ${page}` : 'Hello, world!';
  const keywords = 'блог, программирование, nodejs, javascript, developer, dev, blog';
  const mainImage = '/images/standard/main.jpg';
  const description = page
    ? [
      `Страница ${page} моего личного блога.`,
      'Что из этого покемон, а что - имя нового js фреймворка?',
    ].join(' ')
    : [
      'Этот блог родился, когда я делал первые шаги в NodeJS.',
      'В нём я публикую свои мысли и заметки про',
      'программирование и лучше писать код.',
    ].join(' ');
  const seo = {
    title,
    h1,
    keywords,
    description,
    mainImage,
  };

  return res.render('category', {
    // google: true,
    // sidebar: true,
    // news,
    // pagination,
    seo,
  });
}

module.exports = publicRouter;

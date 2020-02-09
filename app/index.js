require('dotenv').config();

const path = require('path');
const express = require('express');

const { initMiddleware } = require('./middleware');
const initRoutes = require('./routes');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '..', 'public')));
initMiddleware(app);
initRoutes(app);

app.listen(port, () => console.log(`App listening on port ${port}!`));

module.exports = app;

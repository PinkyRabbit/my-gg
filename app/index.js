require('dotenv').config();

const path = require('path');
const express = require('express');

const { initMiddleware } = require('./middleware');
const errors = require('./utils/errors');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '..', 'public')));
initMiddleware(app);

app.use('*', errors.make404);
app.use(errors.errorHandler);
app.listen(port, () => console.log(`App listening on port ${port}!`));

module.exports = app;

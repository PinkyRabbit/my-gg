const express = require('express');

const app = express();

app.get('/user', (req, res) => {
  res.status(200).json({ name: 'john' });
});

app.get('/', (req, res) => res.send('Hello World!'));

const port = 3000;
app.listen(port, () => console.log(`App listening on port ${port}!`));

module.exports = app;

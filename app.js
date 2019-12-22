const finalhandler = require('finalhandler');
const fs = require('fs');
const http = require('http');

const server = http.createServer((req, res) => {
  const done = finalhandler(req, res);

  fs.readFile('index.html', (err, buf) => {
    if (err) return done(err);
    res.setHeader('Content-Type', 'text/html');
    res.setHeader('Cache-Control', 'public, max-age=0');
    res.end(buf);
  });
});

server.listen(3000);

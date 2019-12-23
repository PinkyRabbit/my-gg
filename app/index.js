require("dotenv").config();

const finalhandler = require("finalhandler");
const fs = require("fs");
const path = require("path");
const http = require("http");

const server = http.createServer((req, res) => {
  const done = finalhandler(req, res);

  fs.readFile(path.join(__dirname, "index.html"), (err, buf) => {
    if (err) return done(err);
    res.setHeader("Content-Type", "text/html");
    res.setHeader("Cache-Control", "public, max-age=0");
    res.end(buf);
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT);

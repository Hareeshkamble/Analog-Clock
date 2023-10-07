const http = require('http');
const fs = require('fs');
const path = require('path');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');

  // Read the HTML file and send it as a response
  fs.readFile(path.join(__dirname, 'index.html'), (err, data) => {
    if (err) {
      res.statusCode = 500;
      res.end('Internal Server Error');
    } else {
      res.end(data);
    }
  });
});
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

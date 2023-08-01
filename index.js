const http = require('http');
const url = require('url');

// http.createServer(function (req, res) {
//   return res.end('Hello from the server!!!');
// });
const server = http.createServer((req, res) => {
  const pathName = req.url;
  if (pathName === '/' || pathName === '/overview') {
    res.end('This is the overview');
  } else if (pathName === '/product') {
    res.end('This the Product');
  } else {
    res.writeHead(404, {
      'Content-type': 'text/html',
      'My-own-Header': 'Edmealem.k',
    });
    res.end('<h1>This page could not be found!!</h1>');
  }
});

server.listen(8000, 'localhost', () => {
  console.log('Listen to requests on port 8000 started!');
});

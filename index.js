const http = require('http');
const url = require('url');
const fs = require('fs');

const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8'); // excuted only once
const dataObj = JSON.parse(data); // This converts the json file to a javascript object

const server = http.createServer((req, res) => { // excuted per request
  const pathName = req.url;
  
  if (pathName === '/' || pathName === '/overview') {
    res.end('This is the overview');
  } else if (pathName === '/product') {
    res.end('This the Product');
  } else if (pathName === '/api') {
    res.writeHead(200, { 'Content-type': 'application/json' });
    res.end(data);
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

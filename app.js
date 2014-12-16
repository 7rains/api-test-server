var http = require('http');
var json = require('./list_api.json');
http.createServer(function (req, res) {
  res.setHeader("Access-Control-Allow-Origin", "http://airbrush.wetpaint.com:3000");
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(json));
}).listen(8080);

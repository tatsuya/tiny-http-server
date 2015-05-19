#!/usr/bin/env node
'use strict';

var commander = require('commander');
var fs = require('fs');

commander
  .option('-p, --port [num]', 'port number the server listen to')
  .option('-s, --status [code]', 'http status code')
  .option('-b, --body [content]', 'http body content')
  .option('-c, --content-type [value]', 'Content-Type header value')
  .option('-f, --file [path]', 'file to serve as http body content')
  .parse(process.argv);

var port = commander.port || 3333;
var status = commander.status || 200;
var filePath = commander.file || '';
var fileContent = filePath ? fs.readFileSync(filePath) : '';
var body = commander.body || fileContent;
var contentType = commander.contentType || 'text/plain';

var http = require('http');

var server = http.createServer(function(req, res) {
  console.log('[%s] "%s %s" "%s"', (new Date()).toUTCString(), req.method, req.url, req.headers['user-agent']);
  res.setHeader('Content-Length', body.length);
  res.setHeader('Content-Type', contentType);
  res.statusCode = status;
  res.end(body);
});

server.listen(port, function() {
  console.log('Listening on ' + port);
});

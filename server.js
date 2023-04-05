const express = require('express');
const app = express();

const http = require('http');
const server = http.Server(app);

app.use(express.static('client'));

server.listen(8080, function () {
  console.log('Chat server running');
});
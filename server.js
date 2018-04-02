const express = require('express');
const http = require('http');
const SocketIO = require('socket.io');

const app = express();
const server = http.createServer(app);
const socket = SocketIO(server);

app.use('/', express.static(__dirname + '/public'));

server.listen(3344, () => {
    console.log("server started at http://localhost:3344");
})
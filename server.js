const express = require('express');
const http = require('http');
const SocketIO = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = SocketIO(server);

app.use('/', express.static(__dirname + '/public'));

var player1 = false;

io.on('connection', (socket) => {

    player1 = !player1;
    
    socket.emit('playerAssignment', { player1 : player1 })
    
    socket.on('p1', (data) => {
        socket.broadcast.emit('p2', { x: data.x })
    })
})

server.listen(4444, () => {
    console.log("server started at http://localhost:4444");
})
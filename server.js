const express = require('express');
const http = require('http');
const SocketIO = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = SocketIO(server);

app.use('/', express.static(__dirname + '/public'));

io.on('connection', (socket) => {
    console.log(socket.id);
    
    socket.on('p1', (data) => {
        io.emit('p2', { x: data.x })
    })
})

server.listen(3333, () => {
    console.log("server started at http://localhost:3333");
})
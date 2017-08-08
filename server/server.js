const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');
const {generateMessage} = require('./utils/message');

var publicPath = path.join(__dirname + '/../public')
const _port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);
io.on('connection', (socket) => {
    console.log('New User Connected');

    // socket.emit("newEmail", {
    //     from: "patel.poonam4@gmail.com",
    //     text: "hello from Poonam!!",
    //     createAt: 123
    // });

    // socket.emit("NewMessage", {
    //     from: "patel.poonam4@gmail.com",
    //     text: "hello from Poonam!!",
    //     createAt: 123
    // });
    // socket.on("CreateEmail", (clientMail) => {
    //     console.log('Response from client', clientMail);
    // });

         socket.emit('NewMessage',generateMessage('Admin','Welcome to the chat App!'));
        socket.broadcast.emit('NewMessage',generateMessage('Admin','New User Added'));

    socket.on("CreateMessage", (message) => {
        //console.log('CreateMessage', message);
        io.emit('NewMessage', generateMessage(message.from,message.text));
        //  socket.broadcast.emit('NewMessage', {
        //     from: message.from,
        //     text: message.text,
        //     createdAt: new Date().getTime()
        // });

    });
    socket.on('disconnect', () => {
        console.log('Disconnected from server');
    });
});
app.use(express.static(publicPath));


app.get('/', function (req, res) {
    res.send('Hello World')
})

server.listen(_port, () => {
    console.log(`server is listening at port ${_port}`);
});
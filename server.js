var PORT = process.env.PORT || 3000;
const express = require('express');
const path = require('path')
const app = express();

app.use(express.static(path.join(__dirname, 'public')))

// app.get("/", (req, res) => {
//     res.sendFile('public/index.html', {root:__dirname})
// })
// var http = require('http');
// var server = http.Server(app);
//
// app.use(express.static('public'));
//
// server.listen(PORT, function() {
//     console.log('Solar system animation');
// });
//
// var io = require('socket.io')(server);
//
// io.on('connection', function(socket) {
//     socket.on('message', function(msg) {
//         io.emit('message', msg);
//     });
// });

app.listen(PORT)
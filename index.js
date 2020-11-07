const express = require('express'); // Get the module
const app = express();
const http = require('http').createServer(app);
const path = require('path');
var io = require('socket.io')(http);
app.use(express.static(__dirname));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
  res.sendFile(__dirname + '/styles.css');
  res.sendFile(__dirname + '/calculator.js');
});

io.on('connection', (socket) => {
  socket.on('calculate', (result) => {
    io.emit('calculate', result);
    console.log('result: ' + result);
  });
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

http.listen(3000, () => {
  console.log('listening on *:3000');
});

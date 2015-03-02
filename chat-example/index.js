var app = require('express')();
var http = require('http').Server(app); 
var io = require('socket.io')(http);

app.get('/', function(req,res) {
	// res.send('<h1>Hello World!</h1>');
	res.sendFile(__dirname + '/index.html'); // ./ uses cwd, __dirname always the directory of the file in which is used
});

io.on('connection', function(socket) {
	console.log('a user connected');
	socket.on('chat message', function(msg){
    // console.log('message: ' + msg);
    io.emit('chat message', msg);
  });
	socket.on('disconnect', function() {
		console.log('a user disconnected');
	});
});

http.listen(3000, function() {
	console.log("listening on port 3000");
})
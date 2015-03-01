var http = require('http');

// http.createServer(function(req, res) {
// 	res.writeHead(200); // writes status code to response
// 	res.write('Hello World');
// 	res.end();
// }).listen(8080);

http.createServer(function(req, res) {
	res.writeHead(200); // writes status code to response
	res.write('Hello World');
	setTimeout(function() {
		res.write('I am Chang');
		res.end();
	},5000);
}).listen(8080);

console.log('listening on port 8080');

// var events = require('events');
// var EventEmitter = events.EventEmitter;

// var chat = new EventEmitter(); 
// chat.on('error', function(foo){
// 	console.log(foo);
// });

// chat.emit('error', 'blah'); 
var http = require('http');

var PORT1 = 7000;

var PORT2 = 7050;

var phrases = ["What's up?", "How are you?", "You good?", "I'm tired."]

// Send response to client.
function handleRequest1(request, response) {
	response.end(phrases[Math.floor(Math.random() * phrases.length)]);
}

// Send response to client.
function handleRequest2(request, response) {
	response.end(phrases[Math.floor(Math.random() * phrases.length)]);
}

// Create new server using node's built in HTTP server.
var server1 = http.createServer(handleRequest1);

var server2 = http.createServer(handleRequest2);

server1.listen(PORT1, function() {
	console.log('http://localhost:7000');
});

server2.listen(PORT2, function() {
	console.log('http://localhost:7050');
});

var PORT = 8000;

var http = require('http');



var server = http.createServer(requestHandler)



server.listen(PORT);
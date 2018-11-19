console.log('HTTP server')

const PORT = 1111;

var http = require('http');

var handler = function(req,res) {

    res.end("Response from nodejs server");

}

http.createServer(handler).listen(PORT,'localhost');

console.log('Listenin port: ',PORT);
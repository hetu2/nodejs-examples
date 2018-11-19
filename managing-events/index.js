console.log('Web server events');
const PORT = 1234;
const http = require('http');

const server = http.createServer();

server.on('request',function(req,res) {
    console.log('request: '+JSON.stringify(req.headers));

    res.end('Request OK ')
});


server.on('upgrade',function(req,socket,head) {
    console.log('server upgrade: websocket ');

    
});


server.listen(PORT,function() {
    console.log('HTTP listening port:'+PORT);
})
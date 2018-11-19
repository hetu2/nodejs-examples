var http = require('http');
const PORT = 1234;

var connect = require('connect');

var bodyParser = require('body-parser');

var app = connect()
    .use(bodyParser.urlencoded({
        extended: true
    }))
    .use(function(req,res){

        const r = req.body;

        res.end('User: '+r.firstName +' '+ r.lastName);

    });

http.createServer(app).listen(PORT)
console.log('Listening port: '+PORT);
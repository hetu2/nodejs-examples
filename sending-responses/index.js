var connect = require('connect');

const PORT = 1234;

var app = connect()
    .use(function(req,res) {

        if(req.url == '/') {

            console.log(req.url);

            res.end('Home page')
        }
        if(req.url == '/hello.json') {

            console.log(req.url);

            const obj = {
                eka: 1,
                toka: 'toinen',
                kolmas: [1,2,3,4]
            }

            res.setHeader('Content-Type','application/json')
            res.end(JSON.stringify(obj));
        }
        if(req.url == '/statusCodeDemo') {

            console.log(req.url);

            res.statusCode = 404;
            res.end(res.statusCode+' - hups')
        }


    })
    .listen(PORT)

console.log('Listening port: '+PORT)
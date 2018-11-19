var connect = require('connect');

const PORT = 1234;

var app = connect()
    .use(function(req,res) {

        const url = req.url;

        console.log(url);

        if(url == '/'){
            res.end('Hello from app')
        }
        else if(url == '/requestHeaders'){

            console.log(req.headers);

            res.end('Headers printed in console')
        }
        else {
            res.end('404 - not found')
        }


    })
    .listen(PORT)

    console.log('Listening port: '+PORT);

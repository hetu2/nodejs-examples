var express = require('express');
var formidable = require('formidable');
var app = express();
const PORT = 1234;

app.use(function(req,res) {

    if(req.method.toLocaleLowerCase() == 'post') {
        var form = new formidable.IncomingForm();

        form.uploadDir = __dirname+'/uploads';
        form.keepExtensions = true;
        form.type = 'multipart';

        form.parse(req, function(err,fields,files) {

            console.log('User: '+fields.firstName+' '+fields.lastName);

            res.writeHead(200,{'content-type':'text/plain'});
            res.end('Form recieved');

        });

        return;

    }

});


app.listen(PORT);
console.log('Listening port: '+PORT);

var request = require('request');
var fs = require('fs');

request("http://localhost:1234/",function(err,res,body){

    if(err) {
        console.log(err)
    }

    console.log(res.body)
    
    console.log(res.statusCode)
    
    console.log(res.headers);

})
.pipe(fs.createWriteStream('data/pipedFile.txt'));

const options = {
    url: 'http://localhost:1234/requestHeaders',
    headers:{'X-DEMO-HEADER':'myOwnHeader'}
}

var callback = function(err,res,body) {

    if(err) console.log(err);
    else console.log(body);

}

request(options,callback);
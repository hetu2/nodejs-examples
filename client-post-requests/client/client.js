var request = require('request');
var fs = require('fs');

var data = {
    firstName: 'Keijo',
    lastName: 'Kaleva',
    myBuffer: new Buffer([1]),
    myFile: fs.createReadStream(__dirname+'/images/kuva.png')
}

console.log(data.myFile)

//request.post('http://localhost:1234').form(data);
//request.post('http://localhost:1234',{form:data});




request.post('http://localhost:1234',{form:data},function(err,res,body) {

    if(err) console.log(err);
    else console.log(body)

});
var request = require('request');

request('http://www.stobe.io',function(err,res,body){

    if(!err) {
        console.log(body)
    }

    if(err) {
        console.log(err)
    }

});


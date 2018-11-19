console.log('Serving files');

const PORT =1234;
const connect = require('connect')
const serveStatic = require('serve-static')

var app = connect()
    .use(serveStatic('myFolder'))
    .listen(PORT)

console.log('listening: '+PORT);
let http = require('http');
let server = http.createServer(handServer);
function handServer(req, res){
  res.end('Welcome to the server')
}
server.listen(4000, () => {
    console.log('Server is running....')
})
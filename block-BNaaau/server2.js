let http = require('http');
let server = http.createServer(serverHandler);
function serverHandler(req, res){
    res.end('My first server in NodeJS')
}
server.listen(5100, () => console.log('server is running on port 5100'));


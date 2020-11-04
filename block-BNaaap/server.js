let http = require('http');
function serverHandler(req, res){
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>Welcome to the NodeJS Server</h1>')
}
let server = http.createServer(serverHandler);
server.listen(4444, () => console.log('Server is running on port 4444'))
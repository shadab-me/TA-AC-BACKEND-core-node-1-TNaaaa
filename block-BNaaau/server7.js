let http = require('http');
let server = http.createServer(serverHandler);
function serverHandler(req, res){
 res.setHeader('Content-Type', 'text/html');
 res.end('<h1>This From Node JS</h1>')

}
server.listen(8000, () => console.log('server is running on port 8000'));


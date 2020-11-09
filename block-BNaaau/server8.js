let http = require('http');
let server = http.createServer(serverHandler);

function serverHandler(req, res){
 res.writeHead(200, {"COntent-Type": "Text/html"});
 res.end('<h1>This is From WriteHead</h1>');
}
server.listen(9000, () => console.log('server is running on port 9000'));


let http = require('http');
let server = http.createServer(serverHandler);

function serverHandler(req, res){
 res.writeHead(200, {"COntent-Type": "Text/json"});
 res.end("success: true, message: 'Welcome to NodeJS'");
}
server.listen(8888, () => console.log('server is running on port 8888'));


let http = require('http');
let server = http.createServer(serverHandler);

function serverHandler(req, res){
 res.writeHead(200, {"Content-Type": "Text/html"});
 if(req.Method == "POST"){
    res.end('<h1>This is From WriteHead</h1>');
 }
}
server.listen(5050, () => console.log('server is running on port 5050'));


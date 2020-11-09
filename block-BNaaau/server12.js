let http = require('http');
let server = http.createServer(serverHandler);

function serverHandler(req, res){
 res.writeHead(200, {"Content-Type": "Text/html"});
 if(req.method == "GET" && req.url == '/users'){
    res.writeHead(201, {'Content-Type': 'text/plain'})
    res.write('This in plain text user form get method');
 } else if(req.method == 'POST' && req.url === '/users'){
        res.writeHead(201, {'Content-Type': 'text/html'})
       res.write('<h1>This is User Post</h2>');
 } else{
       res.writeHead(404, {'Content-Type': 'text/plain'});
       res.write('Page Is Not Found');
 }
  res.end();
}
server.listen(2345, () => console.log('server is running on port 2345'));


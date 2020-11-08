let http = require('http');
 let server = http.createServer(serverHandler);
function serverHandler(req, res){
    res.end(req.headers)
}
server.listen(7000, () => console.log('server is running on port 7000'));


let http = require('http');
const { url } = require('inspector');
 let server = http.createServer(serverHandler);
function serverHandler(req, res){
    console.log(req,url, req.method) 
}
server.listen(5566, () => console.log('server is running on port 5566'));


let http = require('http');
const { hrtime } = require('process');
let server = http.createServer(serverHandler);
function serverHandler(req, res){
    console.log(req.headers)
}
server.listen(5555, () => console.log('server is running on port 5555'));


let http = require('http');

const { hrtime } = require('process');
let server = http.createServer(server1Handler);
function server1Handler(req, res){
     res.statusCode(201);
}
server.listen(3333, () => console.log('server is running on port 3333'));


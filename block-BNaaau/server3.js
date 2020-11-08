let http = require('http');
const { hrtime } = require('process');
let server = http.createServer(server1Handler);
function server1Handler(req, res){
    console.log(req)
}
server.listen(5000, () => console.log('server is running on port 5000'));


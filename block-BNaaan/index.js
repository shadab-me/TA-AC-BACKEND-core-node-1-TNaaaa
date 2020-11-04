let http = require('http');
let server = http.createServer(handleServer);
function handleServer(req, res){
    console.log(req.method, req.url)
}
server.listen(3000, () => {
    console.log('Server Is Running on Port 3000')
})
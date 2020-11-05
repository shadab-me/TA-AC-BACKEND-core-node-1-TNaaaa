let http = require('http');
let server = http.createServer(serverHandler);
function serverHandler(req, res){
    if(req.method == 'GET' && req.url == '/'){
        res.end('Welcome to Homepage')
    }else if(req.method == 'GET' && req.url == '/about'){
        res.setHeader('content-type', 'text/html')
         res.end('<h2>This is all about NodeJs</h2>')
    }else if(req.method === 'POST' && req.url == '/about'){
        res.end('this is post request')
    }

}
server.listen(3000, () => {
     console.log('Server is running....')
})

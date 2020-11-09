let http = require('http');
let server = http.createServer(serverHandler);
let url = require('url');

function serverHandler(req, res){
    console.log(req.url)
    let parseUrl = url.parse(req.url, true);
    console.log(parseUrl.pathname);
    console.log(parseUrl.query.email);
    let email = parseUrl.query.email;
    res.setHeader('Content-Type','text/json');
    res.end(email);
 }
server.listen(5100, () => console.log('server is running on port 5100'));


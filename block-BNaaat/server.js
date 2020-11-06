let http = require('http');
let fs = require('fs')
let server = http.createServer(serverHandler);

function serverHandler(req, res){
 if(req.method == 'GET' && req.url == '/file'){
   fs.readFile('./index.html', function(err, data){
  res.setHeader('Content-Type','text/html');
  res.end(data)
 });

}else if(req.method == 'GET' && req.url == '/stream'){
    //console.log(req);
     fs.createReadStream('./index.html', function(err, data){
            res.setHeader('Content-Type', 'text/html');
           res.end(data);
    });
}
}
server.listen(5555, () => {
console.log('Server is Running');
});
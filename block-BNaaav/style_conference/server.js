let http = require('http');
let fs  = require('fs');
const { url } = require('inspector');
let server = http.createServer(serverHandler);

function serverHandler(req,res){
    console.log(req.url);
    let extensionName = req.url.split(".").pop();
  if(req.url == '/' && req.method == 'GET'){
      res.setHeader('Content-Type', 'text/html');
      fs.readFile('./index.html', (err, content) => {
          if(err) console.log(err);
          res.end(content);
      })
  }else if(req.url == '/register' && req.method == 'GET'){
    res.setHeader('Content-Type', 'text/html');
    fs.readFile('./register.html', (err, content) => {
        if(err) console.log(err);
        res.end(content);
  });
 }else if(req.url == '/speakers' && req.method == 'GET'){
    res.setHeader('Content-Type', 'text/html');
    fs.readFile('./speakers.html', (err, content) => {
        if(err) console.log(err);
        res.end(content);
  });
 }
 else if(req.url == '/venue' && req.method == 'GET'){
    res.setHeader('Content-Type', 'text/html');
    fs.readFile('./venue.html', (err, content) => {
        if(err) console.log(err);
        res.end(content);
  });
 }
  
 else if(req.url == '/schedule' && req.method == 'GET'){
    res.setHeader('Content-Type', 'text/html');
    fs.readFile('./schedule.html', (err, content) => {
        if(err) console.log(err);
        res.end(content);
  });
 }
 else if(req.url.includes('.css')){
      res.setHeader('Content-Type', 'text/css');
      fs.readFile("." + req.url, (err, content) => {
          if(err) console.log(err)
          res.end(content);
      })
  }else if(["jpg", "png", "svg"].includes(extensionName)){
      res.setHeader('Content-Type', "image/" + extensionName)
      fs.createReadStream("." + req.url).pipe(res)
  }
 }


server.listen(3000, () => console.log('server is running on port 3000'));
let fs = require('fs');

fs.readFile('./content.md', (err, content) => {
    if(err) console.log(err);
    console.log(content.toString());
})

/*
fs.readFileSync('./content.md', (err, content) => {
    if(err) console.log(err);
    console.log(content.toString());
})
*/
let newBuffer1 = new Buffer.alloc(10);
newBuffer1.write('Welcome to Buffer', "utf-8");
console.log(newBuffer1.toString());


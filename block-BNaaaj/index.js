let os = require('os');
let fs = require('fs');


 
console.log(os.cpus());
console.log(os.freemem());
console.log(os.uptime());
console.log('welcome to Nodejs');


// buffer first method

let newBuffer = new Buffer.alloc(12);
console.log(newBuffer.toString());

// non blocking code
/*
console.log('Execution start');
setTimeout(function(){
    console.log('From None Blocking Code');
}, 1000)
console.log('Execution end here')
*/

console.log('starting');
for(let i = 1; i <= 10; i++){
    console.log(i);
}
console.log('end');
let url = require('url');
let parseUrl = 'https://airindia.com/fares/calculate?from=delhi&to=detroit';
let psUrl = url.parse(parseUrl);
console.log(psUrl.query);
console.log(psUrl.pathname);
console.log(psUrl.protocol);
let parQ = url.parse(psUrl.query);
console.log(parQ);
var fs = require('fs');
var data = fs.readFileSync('./textFile/package.txt', 'utf8');
console.log(data);
/* console.log("HELLO WORLD"); */

// var sum=0
// for (var i=2; i<process.argv.length; i++) {
// 	sum+=Number(process.argv[i]);

// }
// console.log(sum);

// var fs = require('fs');
// var buff = fs.readFileSync(process.argv[2]).toString();
// console.log(buff.split('\n').length - 1);

var fs = require('fs');
var path = process.argv[2];
// first two args are node and /path/to/program.js

fs.readFile(path, 'utf8', function(err,data) {
  var lines = data.split('\n');
  console.log(lines.length-1);
});



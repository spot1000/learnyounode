var fs = require("fs");
var buffer = process.argv[2];
console.log(fs.readFileSync(buffer).toString().split("\n").length - 1);
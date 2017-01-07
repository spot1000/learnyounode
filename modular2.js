var mod = require('./modular.js');
var dir = process.argv[2];
var ext = process.argv[3];
mod(dir,ext,function(err, arr) {
    if (err) {
        console.log(err);
    }
    for (var file of arr) {
        console.log(file)
    }
});

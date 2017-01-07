var fs = require('fs');
function eyeOh(err, data) {
    if (err) {
        console.log(err);
    } 
    console.log(data.toString().split("\n").length - 1);
}

fs.readFile(process.argv[2], eyeOh);

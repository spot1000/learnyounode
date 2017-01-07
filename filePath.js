var fs = require('fs');
var path = require('path');
var dirPath = process.argv[2];
var extention = process.argv[3];

fs.readdir(dirPath, function(err, data){
    if (err) {
        console.log(err);
    }
    for (var x = 0; x < data.length; x++) {
        if (path.extname(data[x]) == "." + extention) {
            console.log(data[x]);
        }
    }
});


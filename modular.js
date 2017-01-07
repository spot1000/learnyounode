function modularus(dirName, extention, callback) {
    var fs = require('fs');
    var path = require('path');
    var output = [];
    fs.readdir(dirName, function(err, data){
        if (err) {
            return callback(err);
        }
        for (var file of data) {
            if (path.extname(file) == "." + extention) {
                output.push(file);
        }
    }
        return callback(null, output)
    });
}

module.exports = modularus
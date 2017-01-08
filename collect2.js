var http = require('http');
var bl = require('bl');
var results = [];
var count = 0;

function logger() {
    for (var x = 0; x < results.length; x++) {
        console.log(results[x]);
    }
}

function getter(index) {
    http.get(process.argv[2+index], function(response) {
        response.pipe(bl(function(err, data) {
            if (err) {
                console.log(err);
            }
            results[index] = data.toString();
            count++
            
            if (count == 3) {
                logger();
            }
        }));
    });
}

for (var i = 0; i < 3; i++) {
    getter(i);
}

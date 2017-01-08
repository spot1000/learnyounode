var http = require('http');
var bl = require('bl');

var site = process.argv[2];

http.get(site, function(response) {
    response.pipe(bl(function(err, data) {
        if (err) {
            console.log(err)
        }
        data = data.toString();
        console.log(data.length);
        console.log(data);
    }));
})
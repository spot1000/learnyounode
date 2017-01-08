var net = require('net');

function zeroFill(num) {
    if (num < 10) {
        return '0' + num
    } else {
        return num;
    }
}

function getDate() {
    var date = new Date();
    var dateIs;
    dateIs = date.getFullYear()+'-';
    dateIs += zeroFill(date.getMonth()+1) + "-";
    dateIs += zeroFill(date.getDate()+1) + " ";
    dateIs += zeroFill(date.getHours()) + ":";
    dateIs += zeroFill(date.getMinutes());
    return dateIs;
}

var server = net.createServer(function(socket) {
    socket.end(getDate() + '\n');
});
server.listen(Number(process.argv[2]));
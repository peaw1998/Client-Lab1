var net = require('net')
var HOST = '0.0.0.0'
var PORT = 3000
var i = 0
net.createServer(function (sock) {
    console.log('CONNECTED: ' + sock.remoteAddress + ':' + sock.remotePort);
    sock.on('data', function (data) {
        if (i == 5) {
            sock.write('END');
            i = 0
        }
        console.log('DATA ' + sock.remoteAddress + ': ' + data);
        if (data && data.toString().length == 10) //null & unifined
            sock.write('OK');
        else if (data && data.toString() == '5')
            sock.write('BINGO');
        else if (data && data.toString() != '5')
            sock.write('WRONG');
        i++
    }
    );
    sock.on('close', function (data) {
        console.log('CLOSED: ' + sock.remoteAddress + ' ' + sock.remotePort);
    });
    sock.on('error', (err) => console.log('error' + err))
}).listen(PORT, HOST);

console.log('Server listening on ' + HOST + ':' + PORT);

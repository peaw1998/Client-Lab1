var net = require('net');
var HOST = '0.0.0.0';
var PORT = 3000;

var client = new net.Socket();
client.connect(PORT, HOST, function () {
    console.log('CONNECTED TO: ' + HOST + ':' + PORT);
    client.write('5935512010');
});
client.on('data', (data) => {
    console.log('Data from server : ', data.toString())

    if (data == 'OK')
        client.write(parseInt(Math.floor(Math.random() * 21)) + '')
    else if (data == 'WRONG')
        client.write(parseInt(Math.floor(Math.random() * 21)) + '')
    else if (data == 'BINGO') {
        console.log('BINGO!')
        client.destroy()
    }
    else if (data == 'END')
        client.destroy()
})
var net = require('net')
var port = process.argv[2]

var server = net.createServer(function(socket) {
    // Socket handling logic
    var now = new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '').replace(/:\d+$/,'')
    // "YYYY-MM-DD hh:mm"
    socket.end(now + '\n')
})

server.listen(port)

const net = require('net')

const sockets = []

const server = net.createServer(function(socket) {
    sockets.push(socket)
    socket.on('data', function(data) {
        for (let asocket of sockets) {
            if (asocket !== socket) {
                asocket.write(data)
            }
        }
    })
})

server.listen(8000)
const http = require('http')
const server = http.createServer(function(req, res) {
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    res.end('hello world')
})
server.listen(8000)
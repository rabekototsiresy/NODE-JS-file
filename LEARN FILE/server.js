const http = require('http')

const server = http.createServer( (req,res)=>{
  res.writeHead(200,{'Content-Type': 'text/plain'})
  res.end('hello world')
})

server.listen(8080,'127.0.0.1')
console.log("listing port 8080")
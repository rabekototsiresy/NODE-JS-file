const http = require('http')
const fs = require('fs')

const server = http.createServer((req,res)=>{
  res.writeHead(200,{"Content-Type": "text/html"})
  // res a writable stream
  const myReadStream = fs.createReadStream(__dirname+"/index.html","utf8")
  myReadStream.pipe(res)
})

server.listen(8080,()=>{
  console.log("server is runnig 8080")
})

//createReadStram inherit event Emitter
// const myReadStream = fs.createReadStream(__dirname+"/README.MD","utf8")
// const myWriteStream = fs.createWriteStream(__dirname+"/CopyREADME.MD")

// myReadStream.pipe(myWriteStream)
// myReadStream.on('data',(chunk)=>{
//   console.log("chunk received")
//   console.log(chunk)
//   myWriteStream.write(chunk)
// })
const http = require('http')
const fs = require('fs')

const server = http.createServer((req,res)=>{
  let url = req.url

  if(url == "/"){
    res.writeHead(200,{'Content-Type': 'text/html'})
     fs.createReadStream(__dirname+'/index.html','utf8').pipe(res)
  }else if(url =="/contact"){
    res.writeHead(200,{'Contetent-Type': 'text/html'})
    fs.createReadStream(__dirname+'/contact.html','utf8').pipe(res)
  }else if(url =="/portfolio"){
    res.writeHead(200,{'Content-Type': 'text/html'})
    fs.createReadStream(__dirname+"/portfolio.html").pipe(res)
  }else{
    res.writeHead(200,{'Content-Type': 'text/html'})
    fs.createReadStream(__dirname+"/404.html").pipe(res)
  }

})


server.listen(8080,()=>{
  console.log("server is runnig on port 8080")
})
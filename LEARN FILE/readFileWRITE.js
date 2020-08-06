const fs = require('fs')

fs.readFile('readme.txt','utf8',(err,res)=>{
  console.log("file read succefull")
  fs.writeFile('info.txt',res,(err,res)=>{
    console.log("writen file succeffull")
  })
  console.log("other code again")
})

console.log("other code")

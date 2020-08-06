const fs = require('fs')

//delete file
fs.unlink('info.txt',()=>{
  console.log("delete")
})
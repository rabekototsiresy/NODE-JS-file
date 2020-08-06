const fs = require('fs')

//create folder

fs.readFile('cin.md','utf8',(err,res)=>{
  fs.mkdir('PERSO',()=>{
    fs.writeFile('./PERSO/copyCin.md',res,()=>{
      console.log('copied')
    })
  })
})


setTimeout(()=>{
  fs.unlink('./PERSO/copyCin.md',()=>{
    console.log('file was delted')
    fs.rmdir('PERSO',()=>{
      console.log('Folder was delted')
    })
  })
},3000)
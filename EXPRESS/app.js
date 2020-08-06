const express = require('express')
const app = express()
const monModule = require('./json/data')
const bodyParser = require('body-parser')

const urlEncodedParser = bodyParser.urlencoded({extended: false})

app.set('view engine','ejs')


app.use('/assets',express.static('assets'))
app.get('/',(req,res)=>{
  res.render('index')
})

app.post('/contact',urlEncodedParser,(req,res)=>{
  
  res.render('contact-succeded',{data: req.body})
})





app.get('/about-us',(req,res)=>{

  res.render('about-us')
})

app.get('/profile/:id',(req,res)=>{
  const data = monModule.data
  
  let user = data.filter(val=>val.id== req.params.id)
    res.render('profile',{user: user})
  
})

app.use((req,res,next)=>{
  res.render('errorPage')
})



app.listen(8080)
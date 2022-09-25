
const express = require('express');
const cors = require('cors');
const app = express()
const morgan = require('morgan');
const fs = require('fs');
const path = require('path')
app.use(express.text())
app.use(express.json())

app.use(cors({origin:'http://127.0.0.1:5500'}))

var accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })
 
// setup the logger
app.use(morgan('combined', { stream: accessLogStream }))
 
app.get('/', function (req, res) {
  res.send('hello, world!')
})

app.use((req,res,next) =>{
  console.log("Primera Funcion MiddleWare")
  next()
},(req,res,next)=>{
  console.log("Segunda Funcion MiddleWare")
  next()
})

app.get('/', (req,res)=> {
    res.sendFile('/static/index.html',{root:__dirname})
})


app.post('/json', (req, res)=> {
    console.log(req.body.nombre)
    let cadena = "Bienvenido:" +req.body.nombre+""+req.body.apellido
    res.json({saludo:cadena})
})

app.get('/mayusculas/:cadena', (req,res)=> {
    console.log(req.params)
    res.send(req.params)
})

app.get('/suma', (req,res)=> {
    console.log(req.query)
    let suma = parseInt(req.query.x)+parseInt(req.query.y)
    res.send(`La suma es ${suma}`)
})

app.listen(8083,()=>{console.log('Servidor funcinal')})

app.use( (req,res)=> {
    res.sendFile('/static/404.html',{root:__dirname})
})


const express = require('express');
const cors = require('cors');
const app = express()
app.use(express.text())
app.use(express.json())

app.use(cors({origin:'http://127.0.0.1:5500'}))


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

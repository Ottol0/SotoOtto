
const express = require('express');
const cors = require('cors');
const app = express()

app.use(cors({origin:'http://127.0.0.1:5500'}))
app.get('/',(req,res)=>{
    res.send('Servidor express')
})

app.listen(8083,()=>{console.log('Servidor funcinal')})

app.get('/', (req,res)=> {
    res.sendFile('/static/index.html',{root:__dirname})
})

app.use( (req,res)=> {
    res.sendFile('/static/404.html',{root:__dirname})
})


const express = require('express');
const app = express()
app.get('/',(req,res)=>{
    res.send('Servidor express')
})

app.listen(8081,()=>{console.log('Servidor funcinal')})
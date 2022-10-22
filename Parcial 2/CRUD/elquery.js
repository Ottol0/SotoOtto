const express = require('express');
const sql = require("mysql2");

const app = express()

app.use(express.text())
app.use(express.json())

const{ json, response } = require('express')

var pool = sql.createPool({
    host:'localhost',
    user:'root',
    password:'',
    database:'trabajito'
});


app.get('/',(req,res) => {
    miQuery = 'SELECT * FROM personasxd WHERE id =' +req.body
    pool.query(miQuery, function(err,result,fields){
        res.send(JSON.stringify(result))
    })

})

//Post
app.post('/',(req,res)=>{
    let nombre = req.body.nombre
    let apellido = req.body.apellido
    pool.query(`INSERT INTO personasxd(nombre,apellido) VALUES('${nombre}','${apellido}')`, function(err,result,fields){
        res.send("Registrado")
    })
})
//Delete
app.delete('/',(req,res)=>{
   let id = req.body.id
   pool.query(`DELETE FROM personasxd WHERE id = '${id}'`, function(err,result,fields){
    res.send(`Se elimino`)
   })
})
//Put Patch
app.patch('/',(req,res)=>{
    let id = req.body.id
    let nombre = req.body.nombre
    let apellido = req.body.apellido
    pool.query(`UPDATE personasxd SET nombre ='${nombre}', apellido = '${apellido}' WHERE id = '${id}'`,function(err,response,fields){
        res.send(`Se actualizo ${nombre}`)
    })
})
app.listen(8081,()=>{console.log('Funciona')})
  
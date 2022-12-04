const express = require('express');
var mysql = require('mysql')
var j2x = require('json2xls')
var fs = require('fs');

const app = express()

app.use(express.text())
app.use(express.json())

const{ json, response } = require('express')

var con = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'epicabasedatos'
});


app.get('/',(req,res) => {
    con.connect(function(err){
        if(err) throw err;
        console.log("conected");
        miQuery = 'SELECT * FROM identificador WHERE IdEstado =' +req.body
        con.query(miQuery, function(err,response){
            console.log(response)
            res.send(response)
            con.end()    
        })
    })
})

//Post

//Delete

//Put Patch
app.listen(8081,()=>{console.log('Funciona')})
  
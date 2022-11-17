const express = require('express')
const cors = require("cors")
const{ query, json } = require('express')
const swaggerUI = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');
let path =require('path')

const ruta_personas=require('./ruta_personas')

const app = express()

app.use(express.text())
app.use(express.json())
app.use(cors({origin:"http:localhost"}))

app.use('/personas',ruta_personas.router)

const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'personas',
            version: '1.0.0',
        },
            servers:[
                {url: "http://localhost:8081"}
            ],
    },
    apis: [`${path.join(__dirname,'./ruta_personas.js')}`],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs",swaggerUI.serve,swaggerUI.setup(swaggerDocs));

app.listen(8081,()=>{
    console.log('Servidor express funcionando')
})
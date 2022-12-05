const express = require('express')
const app = express()
const cors = require('cors')
const port = 3000
const path = require('path');
const { Canciones, creacion, consulta, actualizar, eliminar } = require('./modulodatabase.js')
const { dataMusic, embedSong } = require('./spotify.js')
const swaggerUI = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerOptions = {
  definition: {
      openapi: '3.0.0',
      info: {
        title: 'Api Musical',
        version: '1.0.0',
      },
    server: [
      {url: "https://ApiMusica2.ottol0.repl.co"}
    ],
  },
  apis: [`${path.join(__dirname,"/server.js")}`]
}

const swaggerDocs = swaggerJsdoc(swaggerOptions);



app.use(express.static("templates"))
app.use(cors({ origin: "*" }))
app.use("/api-docs",swaggerUI.serve,swaggerUI.setup(swaggerDocs));
app.use(express.json())
app.use(express.text())

// Render Html File
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'templates/index.html'));
});

/**
* @swagger
* /canciones:
*  get:
*    summary: Retorna un objeto JSON aleatorio con la url de la imagen de la base de datos
*    responses: 
*      '200':
*        description: Objeto aleatorio de la base de datos
*/
app.get('/canciones', async function(req, res) {
  objcanciones = await Canciones()
  res.json(objcanciones);
});

/**
* @swagger
* /canciones:
*  get:
*    summary: Retorna un objeto JSON aleatorio con la url de la imagen de la base de datos
*    responses: 
*      '200':
*        description: Objeto aleatorio de la base de datos
*/
//spotify
app.post('/embed', async function(req, res) {
  embed = await embedSong(req.body.url)

  res.json({"embed":embed});
});


/**
* @swagger
* /create:
*  post:
*    summary: Permite insertar una cancion a la base de datos
*    responses:  
*      '200':
*        description: Se inserto una cancion
*/
app.post('/create', async function(req, res) {
  msg = await creacion(req.body)
  res.send(msg);
});

//Consultar
/**
* @swagger
* /consult:
*  post:
*    summary: Permite Consultar una cancion en especifico
*    responses: 
*      '200':
*        description: Se consulto una cancion
*/
app.post('/consult', async function(req, res) {
  msg = await consulta(req.body)
  res.send(msg);
});

//Actualizar
/**
* @swagger
* /actualizar:
*  patch:
*    summary: Permite editar una cancion en especifico
*    responses: 
*      '200':
*        description: Se edito una cancion
*/
app.patch('/actualizar', async function (req, res) {
  msg = await actualizar(req.body)
  res.send(msg);
});

//Eliminar
/**
* @swagger
* /eliminar:
*  delete:
*    summary: Permite eliminar una cancion de la base de datos
*    responses:
*      '200':
*        description: Se elimino una cancion
*/
app.delete('/eliminar', async function (req, res) {
  console.log(req.body)
  msg = await eliminar(req.body)
  res.send(msg)
});


app.listen(port, () => {
  // Code.....
})
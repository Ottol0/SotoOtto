const express = require('express')
const app = express()
const cors = require('cors')
const port = 3000
const path = require('path');
const { Canciones, creacion, consulta, actualizar, eliminar } = require('./modulodatabase.js')
const { dataMusic, embedSong } = require('./spotify.js')


app.use(express.static("templates"))
app.use(cors({ origin: "*" }))

app.use(express.json())
app.use(express.text())

// Render Html File
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'templates/index.html'));
});

//BASE DE DATOS
app.get('/canciones', async function(req, res) {
  objcanciones = await Canciones()
  res.json(objcanciones);
});

//spotify
app.post('/embed', async function(req, res) {
  embed = await embedSong(req.body.url)

  res.json({"embed":embed});
});

//Crear
app.post('/create', async function(req, res) {
  msg = await creacion(req.body)
  res.send(msg);
});

//Consultar
app.post('/consult', async function(req, res) {
  msg = await consulta(req.body)
  res.send(msg);
});

//Actualizar
app.patch('/actualizar', async function (req, res) {
  msg = await actualizar(req.body)
  res.send(msg);
});

//Eliminar
app.delete('/eliminar', async function (req, res) {
  console.log(req.body)
  msg = await eliminar(req.body)
  res.send(msg)
});


app.listen(port, () => {
  // Code.....
})
//descargar NODEjs, en una carpeta hacer un Servidor express
const http = require('http');

const servidor=http.createServer((req,res)=>{
    res.end('Servidor HTTP de NopdeJS respondiendo');
});

servidor.listen(8080,(console.log('Servidor corriendo y escuchando en puerto 8080')));
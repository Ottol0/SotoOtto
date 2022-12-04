const postgres = require("postgres")

//Coneccion de DataBase
const sql = postgres('postgres://ltphrpft:j4DOmcDdi1RQuw-QWahdn6IxG-OtOBYz@babar.db.elephantsql.com/ltphrpft', {
  host: 'babar.db.elephantsql.com',// Postgres ip address[s] or domain name[s]
  port: 5432,          // Postgres server port[s]
  database: 'ltphrpft',            // Name of database to connect to
  username: 'ltphrpft',            // Username of database user
  password: 'j4DOmcDdi1RQuw-QWahdn6IxG-OtOBYz',  // Password of database user}) 
})

//Todas Las Canciones
async function Canciones() {
  canciones = await sql`select * from buenamusica order by id`
  return canciones
}


//Consulta
async function consulta(obj) {
  ontacancion = await sql `Select citamusical, dondeescucharla from buenamusica WHERE "cancion" = ${obj.cancion}`
  return ontacancion
}

//Creacion
async function creacion(obj) {
  console.log(obj)
  cancion = await sql`INSERT INTO buenamusica(artista,cancion,album,citamusical,dondeescucharla) VALUES(${obj.artista},${obj.cancion},${obj.album},${obj.cita},${obj.url});`
  return "Todo bien"
}

//Actializar
async function actualizar(obj) {
  editcancion = await sql`UPDATE buenamusica SET citamusical =${obj.cita} WHERE cancion = ${obj.cancion}`
  return "Todo bien"
}

//Eliminar
async function eliminar(obj) {
  elimican = await sql`DELETE FROM buenamusica WHERE cancion= ${obj.cancion}`
  return "Se Fue"
}

//Exportaciones
module.exports.sql = sql
module.exports = { Canciones, creacion, consulta, actualizar, eliminar }
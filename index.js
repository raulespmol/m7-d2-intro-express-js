//Conexion del servidor
import 'dotenv/config'
import app from './src/app.js'

const {PORT} = process.env

app.listen(PORT, console.log(`Servidor escuchando en puerto ${PORT}`))
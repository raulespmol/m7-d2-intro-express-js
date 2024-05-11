//Conexion del servidor
import 'dotenv/config'
import app from './src/app.js'

const PORT = process.env.PORT || 3000

app.listen(PORT, console.log(`Servidor escuchando en puerto ${PORT}`))

//Tuve que definir PORT de esta manera porque al descargar el repositorio
//y levantar el servidor con npm start, PORT aparecía como undefined
//No supe como solucionarlo, espero me puedas ayudar
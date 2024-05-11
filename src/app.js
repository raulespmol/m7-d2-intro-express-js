//Configuracion del servidor
import express from 'express'
import routes from './routes/indexRoutes.js'
import url from 'url'

const app = express()
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

app.use(express.json())
app.use('/', routes)

app.get('/', (req, res) => {
  res.sendFile(__dirname + 'index.html')
})

export default app;
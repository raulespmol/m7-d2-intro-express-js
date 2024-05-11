//Configuracion del servidor
import express from 'express'
import routes from './routes/indexRoutes.js'

const app = express()

app.use(express.json())
app.use('/', routes)

export default app;
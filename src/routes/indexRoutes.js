import { Router } from 'express'
import cancionesRoutes from './canciones/cancionesRoutes.js'

import url from 'url'
import path from 'path';

const routes = Router()

routes.use('/canciones', cancionesRoutes)

routes.get('/', (req, res) => {
  const __dirname = url.fileURLToPath(new URL('.', import.meta.url))
  const filePath = path.join(__dirname, '../index.html') 
  res.sendFile(filePath)
})

export default routes
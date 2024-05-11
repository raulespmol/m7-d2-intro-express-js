import { Router } from 'express'
import cancionesRoutes from './canciones/cancionesRoutes.js'

const routes = Router()

routes.use('/canciones', cancionesRoutes)

export default routes
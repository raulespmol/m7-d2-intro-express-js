import { Router } from 'express'
import { getJSON, agregarCancion, actualizarCancion, eliminarCancion } from '../../controllers/cancionesController.js'

const cancionesRoutes = Router()

cancionesRoutes.get('/', getJSON)
cancionesRoutes.post('/', agregarCancion)
cancionesRoutes.put('/:id', actualizarCancion)
cancionesRoutes.delete('/:id', eliminarCancion)

export default cancionesRoutes
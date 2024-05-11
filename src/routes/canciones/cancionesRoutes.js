import { Router } from 'express'

const cancionesRoutes = Router()

cancionesRoutes.get('/', (req, res) => {
  res.send('Hola desde modulo cancionesRoutes')
})

export default cancionesRoutes
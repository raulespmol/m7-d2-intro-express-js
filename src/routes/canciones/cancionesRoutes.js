import { Router } from 'express'
import { readFileSync, writeFileSync } from 'fs'

const cancionesRoutes = Router()
const dataCanciones = 'src/canciones.json'

cancionesRoutes.get('/', (req, res) => {
  const canciones = JSON.parse(readFileSync(dataCanciones, 'utf-8'))
  res.json(canciones)
})

export default cancionesRoutes
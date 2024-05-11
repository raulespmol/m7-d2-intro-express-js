import { Router } from 'express'
import { readFileSync, writeFileSync } from 'fs'

const cancionesRoutes = Router()
const dataCanciones = 'src/canciones.json'

cancionesRoutes.get('/', (req, res) => {
  const canciones = JSON.parse(readFileSync(dataCanciones, 'utf-8'))
  res.json(canciones)
})

cancionesRoutes.post('/', (req, res) => {
  const cancion = req.body
  const canciones = JSON.parse(readFileSync(dataCanciones, 'utf-8'))

  canciones.push(cancion)

  writeFileSync(dataCanciones, JSON.stringify(canciones))

  res.send('Cancion agregada')
})

export default cancionesRoutes
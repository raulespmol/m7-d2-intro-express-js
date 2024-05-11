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

cancionesRoutes.put('/:id', (req, res) => {
  const {id} = req.params
  const updateCancion = req.body
  const canciones = JSON.parse(readFileSync(dataCanciones, 'utf-8'))

  const updateCanciones = canciones.map(cancion => (
    cancion.id == id 
    ? {...updateCancion} 
    : cancion
  ))

  writeFileSync(dataCanciones, JSON.stringify(updateCanciones))

  res.send('Cancion actualizada')
})

cancionesRoutes.delete('/:id', (req, res) => {
  const {id} = req.params
  const canciones = JSON.parse(readFileSync(dataCanciones, 'utf-8'))

  const updateCanciones = canciones.filter(c => c.id != id)

  writeFileSync(dataCanciones, JSON.stringify(updateCanciones))

  res.send('Cancion eliminada')
})

export default cancionesRoutes
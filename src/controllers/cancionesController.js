import { readFileSync, writeFileSync } from 'fs'

const dataCanciones = 'src/canciones.json'

export const getJSON = (req, res) => {
  const canciones = JSON.parse(readFileSync(dataCanciones, 'utf-8'))
  res.json(canciones)
}

export const agregarCancion = (req, res) => {
  const cancion = req.body
  const canciones = JSON.parse(readFileSync(dataCanciones, 'utf-8'))

  canciones.push(cancion)

  writeFileSync(dataCanciones, JSON.stringify(canciones))

  res.send('Cancion agregada')
}

export const actualizarCancion = (req, res) => {
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
}

export const eliminarCancion = (req, res) => {
  const {id} = req.params
  const canciones = JSON.parse(readFileSync(dataCanciones, 'utf-8'))

  const updateCanciones = canciones.filter(c => c.id != id)

  writeFileSync(dataCanciones, JSON.stringify(updateCanciones))

  res.send('Cancion eliminada')
}
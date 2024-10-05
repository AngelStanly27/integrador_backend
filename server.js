import express from 'express'
import 'dotenv/config'
import routerCarritos from './routers/carrito.router.js'
import routerProductos from './routers/productos.router.js'
import getConnection from './utils/get-connection.js'


import cors from 'cors'


// ! Variables/Constantes
const app = express()
const PORT = process.env.PORT || 2222
const uri_remota = process.env.URI_MONGO

// ! Middleares
app.use(express.json()) // Intrepeta el body y lo entiende
app.use(cors())

// ! Rutas
app.use('/api/v1/productos', routerProductos)

app.use('/api/v1/carritos', routerCarritos)

app.get('/', (req, res) => {
  // res.send('Hello World!')
  res.redirect('/api/v1/productos')
  res.redirect('/api/v1/carritos')

})

app.all('*', (req, res) => {
    res
        .status(404)
        .json({
            ruta: `${req.url}`,
            metodo: `${req.method}`,
            mensaje: 'No se puede acceder al recurso que están queriendo acceder'
        })
})

app.listen(PORT, (err) => {
  if ( err ) throw new Error('No se pudo levantar el servidor', err)
  console.log(`Servidor funcionando en: http://localhost:${PORT}`)
  getConnection(uri_remota)
})
import express from 'express'
const routerCarrito = express.Router()

import controladoresCarrito from '../controllers/carrito.controllers.js'

routerCarrito.post('/', controladoresCarrito.guardarCarrito)

export default routerCarrito
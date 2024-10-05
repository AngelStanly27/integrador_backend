
import modelosCarritos from '../models/carrito.models.js'

const guardarCarrito = async (req, res) => {
    const productosCarrito = req.body

    try {
        const carritoGuardado = await modelosCarritos.crearCarrito(productosCarrito)
        res.status(201).json(carritoGuardado)
    } catch (error) {
        res.status(500).json({ mensaje: 'No se pudo guardar el carrito'})
        throw new Error('Error en CarritoGuardado');
    }


}

export default {
    guardarCarrito
}
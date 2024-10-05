import CarritosEsquema from "./esquemas/CarritosEsquemas.js"
import mongoose from "mongoose"


const CarritosModelo = mongoose.model('carritos', CarritosEsquema)

const crearCarrito = async (carrito) => {

    try {

        const carritoCreado = new CarritosModelo({ carrito })

        const carritoGuardado = await carritoCreado.save() 

        return carritoGuardado
        
    } catch (error) {
        throw new Error('no se puede crear Carrito.model');
    }
}

export default {
    crearCarrito
}
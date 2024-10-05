import CarritosEsquema from "./esquemas/CarritosEsquemas.js"
import mongoose from "mongoose"


const CarritosModelo = mongoose.model('carritos', CarritosEsquema)

const crearCarrito = async (carrito) => {

    try {

        const carritoCreado = new CarritosModelo({ carrito })

        const carritoGuardado = await carritoCreado.save() 

        return carritoGuardado
        
    } catch (error) {
        console.log('[crearCarrito]: No se pudo crear...', error)
    }
}

export default {
    crearCarrito
}
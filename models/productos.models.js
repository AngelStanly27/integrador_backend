import mongoose from "mongoose"
import ProductosEsquema from "./esquemas/ProductosEsquema.js"

// ! MODELO MONGOOSE 
const ProductosModelo = mongoose.model('productos', ProductosEsquema)

const obtenerTodos = async () => {

    try {
        const productos = await ProductosModelo.find()
        //console.log(productos)
        return productos
    } catch (error) {
        throw new Error('Error en obtenerTodos');
    }


}

const obtenerUnProducto = async (id) => {

    try {
         const producto = await ProductosModelo.findById(id)
        // console.log(producto)
        return producto
    } catch (error) {
        throw new Error('Error en obtener un Producto');
    }

}

const crearProducto = async (producto) => {

    try {

        const productoCreado = await ProductosModelo.create(producto)
        //console.log(productoCreado)
        return productoCreado       
        
    } catch (error) {
        //console.log('[crearProducto]', error)
        throw new Error('Error en Producto.models');
        // Lanzo el error hacía la función que este utilizando esta función (crearProducto)
    }


}

const updateProducto = async (id, productoPorEditado) => {

    try {

        const options = { new: true }
        const productoYaEditado = await ProductosModelo.findByIdAndUpdate(id, productoPorEditado, options)
        return productoYaEditado
        
    } catch (error) {
        // console.log(error, ('no edito el producto'))
        // throw error
        throw new Error('Error en update producto');
    }

}

const deleteProducto = async (id) => {

    try {

        //const productoBorrado = await ProductosModelo.deleteOne({ _id: id })
        const productoBorrado = await ProductosModelo.findByIdAndDelete(id)
        //console.log(productoBorrado)
        return productoBorrado

    } catch (error) {
        throw new Error('Error en Delete Producto');
    }

}

export default {
    obtenerTodos,
    obtenerUnProducto,
    crearProducto,
    updateProducto,
    deleteProducto
}
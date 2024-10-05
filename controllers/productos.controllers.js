import modelos from '../models/productos.models.js'
import handleMongoId from '../utils/handle-mongo-id.js'

const getAll = async (req, res) => {

    try {
        const productos = await modelos.obtenerTodos()
        res.json(handleMongoId(productos))
        console.log(productos)

    } catch (error) {
        throw new Error('Error en getAall');
    }

}

const getOne = async(req, res) => {
    const id = req.params.id

    try {
        const producto = await modelos.obtenerUnProducto(id) 
        res.json(handleMongoId(producto))
    } catch (error) {
        throw new Error('Error en getOne');
    }

}

const create = async (req, res) => { 
    const producto = req.body
    //console.log(producto)

    try {
        const productoCreado = await modelos.crearProducto(producto)
        res.status(201).json(handleMongoId(productoCreado))
        // console.log(productoCreado)
    } catch (error) {
        throw new Error('Error en Create');
    }

}

const update = async (req, res) => { 
    const id = req.params.id
    const productoPorEditado = req.body

    try {
        const produtoActualizado = await modelos.updateProducto(id, productoPorEditado)
        res.json(handleMongoId(produtoActualizado))

    } catch (error) {
        throw new Error('Error en Update');
    }
}

const remove = async (req, res) => {
    const id = req.params.id
    
    try {
        const productoBorrado = await modelos.deleteProducto(id)
        // console.log(productoBorrado)
        res.json(handleMongoId(productoBorrado))
    } catch (error) {
        throw new Error('Error en productoBorrado');
    }

}

export default {
    getAll,
    getOne,
    create,
    update,
    remove
}
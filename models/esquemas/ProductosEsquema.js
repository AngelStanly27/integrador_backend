import mongoose from "mongoose";

// ! Creamos esquema (La descripción de como va a ser nuestro documento)

const ProductosEsquema = mongoose.Schema(
    {
        url: String,
        nombre: {
            type: String,
            require: true
        },
        foto: String,
        descripcion: String,
        categoria: String,
        stock: Number,
        marca: String,
        precio: Number,
        envio: Boolean
    },
    {
        timestamps: true, // createAt | updatedAt 
        versionKey: false
    }
    
)

export default ProductosEsquema
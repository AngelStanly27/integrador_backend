import mongoose from "mongoose";

const CarritoEsquemas = mongoose.Schema(
    {carrito: Array},
    {timestamp: true,
    versionkey: false
    }
)
export default CarritoEsquemas
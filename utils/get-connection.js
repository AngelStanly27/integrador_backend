import mongoose from 'mongoose'

const getConnection = async (uri_remota) => {
  
  try {
    await mongoose.connect(uri_remota)
    console.log('Conexión OK')
  } catch (error) {
    console.log('Conexión Error', error)    
  }

}

export default getConnection
const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    id: String,
    shopId: String,
    name: String,
    photo: String,
    price: Number,
  
})

productSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Product', productSchema)
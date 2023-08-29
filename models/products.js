const mongoose = require('mongoose');

// create a new Mongoose schema 
const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number,required: true },
    category: { type: String, required: true },
})

const ProductsModel = mongoose.model('products', productSchema);
module.exports = ProductsModel;
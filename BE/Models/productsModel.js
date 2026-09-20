
const mongoose = require("mongoose");

const productsSchema = new mongoose.Schema({

    id: {
        type : Number,
        required: true,
        unique: true
    },

    name: {
        type: String,
        required: true
    },

    price: {
        type: Number,
        required: true,
        min: 0
    },

    category: {
        type: String,
        required: true
    },

    brand: {
        type: String,
        required: true

    },

    stock: {
        type: Number,
        required: true,
        min: 0
    },

    rating:{
        type: Number,
        required: true,
        min: 0,
        max: 5
    },

    description: {
        type: String,
        required: true
    },

    image: {
        type: String,
        required: true
    }

});

const Products = mongoose.model("Products", productsSchema);

module.exports = Products;

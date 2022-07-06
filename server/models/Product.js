const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Products = new Schema({
    productName: {
        type: String
    },
    productImage: {
        type: String
    },
    productDescription: {
        type: String
    },
    productPrice: {
        type: String
    },
    productCategory: {
        type: String
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('products', Products)
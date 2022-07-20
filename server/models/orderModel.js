const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: [true, 'Must be provide a userID'],
    },
    shippingDetails: {
        name: {
            type: String,
            required: [true, 'Must be provide full name'],
            minlength: [4, 'Must be at least 4 characters'],
        },
        phone: {
            type: String,
            required: [true, 'Must be provide phone number'],
        },
        email: {
            type: String,
            required: [true, 'Must be provide email address'],
        },
        address: {
            type: String,
            required: [true, 'Must be provide address'],
        },
        note: String,
    },
    products: [
        {
            product: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'product',
                required: [true, 'Must be provide a product ID']
            },
            quantity: Number,
        }
    ],
    status: {
        type: String,
        enum: ['pending', 'processing', 'shipped', 'delivered', 'decided'],
        default: 'pending'
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    total: {
        type: Number,
        default: 0,
    },
})

const Order = mongoose.model('Order', orderSchema)
module.exports = Order
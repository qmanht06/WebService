const mongoose = require('mongoose')
const slugify = require('slugify')

const categorySchema = new mongoose.Schema(
    {
        name: {
            type: String,
        },
        active: {
            type: Boolean,
            default: true,
        },
        createdAt: {
            type: Date,
            default: Date.now(),
        },
        updateAt: {
            type: Date,
            default: Date.now(),
        },
    },
    {
        toJSON: { virtuals: true },
        toObject: { virtuals: true },
    }
)

const Category = mongoose.model('Category', categorySchema)

module.exports = Category

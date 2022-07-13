const express = require('express')
const Category = require('../models/categoryModel')

const router = express.Router()

const getAllCategory = (req, res, next) => {
    const query = Category.find({})
    const docs = await query
    // if (!docs) return next(new Error('No documents found'))

    res.status(200).json({
        status: 'success',
        results: docs.length,
        data: {
            data: docs,
        },
    })
}

const getOneCategory = (req, res, next) => {
    const id = req.params.id
    const query = Category.findById(id)
    const doc = await query
    // if (!doc) return next(new Error('No documents found'))

    res.status(200).json({
        status: 'success',
        data: {
            data: doc,
        },
    })
}

const createCategory = (req, res, next) => {
    const doc = Category.create(req.body)
    // if (!doc) return next(new Error('No documents found'))

    res.status(200).json({
        status: 'success',
        data: {
            data: doc,
        },
    })
}

const updateCategory = (req, res, next) => {
    const id = req.params.id
    const doc = Category.findByIdAndUpdate(id, req.body)
    // if (!doc) return next(new Error('No documents found'))
    
    res.status(200).json({
        status: 'success',
        data: {
            data: doc,
        },
    })
}

const deleteCategory = (req, res, next) => {
    const id = req.params.id
    const doc = Category.findByIdAndDelete(id)
    // if (!doc) return next(new Error('No documents found'))

    res.status(200).json({
        status: 'success',
        data: {
            data: doc,
        },
    })
}


router.route('/').get(getAllCategory).post(createCategory)
router.route('/:id').get(getOneCategory).patch(updateCategory).delete(deleteCategory)

module.exports = router
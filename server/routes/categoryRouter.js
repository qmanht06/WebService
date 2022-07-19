const express = require('express')
const Category = require('../models/categoryModel')

const router = express.Router()

const getAllCategory = async (req, res, next) => {
    const query = Category.find({})
    const docs = await query

    if (!docs) res.status(404).json({ status: 'fail', message: 'No documents found' })

    res.status(200).json({
        status: 'success',
        results: docs.length,
        data: {
            data: docs,
        },
    })
}

const getOneCategory = async (req, res, next) => {
    const id = req.params.id
    const query = Category.findById(id)
    const doc = await query
    if (!docs) res.status(404).json({ status: 'fail', message: 'No documents found' })

    res.status(200).json({
        status: 'success',
        data: {
            data: doc,
        },
    })
}

const createCategory = async (req, res, next) => {
    const doc = await Category.create(req.body)
    if (!docs) res.status(404).json({ status: 'fail', message: 'No documents found' })

    res.status(200).json({
        status: 'success',
        data: {
            data: doc,
        },
    })
}

const updateCategory = async (req, res, next) => {
    const id = req.params.id
    const doc = await Category.findByIdAndUpdate(id, req.body)
    if (!docs) res.status(404).json({ status: 'fail', message: 'No documents found' })

    res.status(200).json({
        status: 'success',
        data: {
            data: doc,
        },
    })
}

const deleteCategory = async (req, res, next) => {
    const id = req.params.id
    const doc = await Category.findByIdAndDelete(id)
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

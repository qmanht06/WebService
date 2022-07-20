const express = require('express')
const Order = require('../models/orderModel')

const getAllOrders = async (req, res, next) => {
    const query = Order.find(req.query)
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

const getOneOrder = async (req, res, next) => {
    const id = req.params.id
    const query = Order.findById(id)
    const doc = await query
    if (!doc) res.status(404).json({ status: 'fail', message: 'No documents found' })

    res.status(200).json({
        status: 'success',
        data: {
            data: doc,
        },
    })
}

const createOrder = async (req, res, next) => {
    const doc = await Order.create(req.body)
    if (!doc) res.status(404).json({ status: 'fail', message: 'No documents found' })

    res.status(200).json({
        status: 'success',
        data: {
            data: doc,
        },
    })
}

const updateOrder = async (req, res, next) => {
    const id = req.params.id
    const doc = await Order.findByIdAndUpdate(id, req.body)
    if (!doc) res.status(404).json({ status: 'fail', message: 'No documents found' })

    res.status(200).json({
        status: 'success',
        data: {
            data: doc,
        },
    })
}

const deleteOrder = async (req, res, next) => {
    const id = req.params.id
    const doc = await Order.findByIdAndDelete(id)
    // if (!doc) return next(new Error('No documents found'))

    res.status(200).json({
        status: 'success',
        data: {
            data: doc,
        },
    })
}

const router = express.Router()

router.route('/').post(createOrder).get(getAllOrders)

router.route('/:id').get(getOneOrder).delete(deleteOrder).patch(updateOrder)

module.exports = router

const express = require("express");
const Order = require("../models/orderModel");
const asyncHandler = require("express-async-handler");

const getAllOrders = asyncHandler(async (req, res, next) => {
  const query = Order.find(req.query);
  const docs = await query;

  //   const docs = await Order.find(req);
  if (!docs)
    res.status(404).json({ status: "fail", message: "No documents found" });

  res.status(200).json(docs);
});

const getOneOrder = async (req, res, next) => {
  const id = req.params.id;
  const query = Order.findById(id);
  const doc = await query;
  if (!doc)
    res.status(404).json({ status: "fail", message: "No documents found" });

  res.status(200).json(doc);
};

const createOrder = async (req, res, next) => {
  console.log(req.body);
  const doc = await Order.create(req.body);

  if (!doc)
    res.status(404).json({ status: "fail", message: "No documents found" });

  res.status(200).json({
    status: "success",
    data: {
      data: doc,
    },
  });
  // res.cookie("cartList", JSON.stringify([]));
  // res.cookie("cartTotalQuantity", 0);
};

const updateOrder = async (req, res, next) => {
  const id = req.params.id;
  const doc = await Order.findByIdAndUpdate(id, req.body, {
    new: true,
  });
  if (!doc)
    res.status(404).json({ status: "fail", message: "No documents found" });

  res.status(200).json(doc);
};

const deleteOrder = async (req, res, next) => {
  const id = req.params.id;
  const doc = await Order.findByIdAndDelete(id);
  // if (!doc) return next(new Error('No documents found'))

  res.status(200).json({
    status: "success",
    data: {
      data: doc,
    },
  });
};

const router = express.Router();

router.route("/").post(createOrder).get(getAllOrders);

router.route("/:id").get(getOneOrder).delete(deleteOrder).patch(updateOrder);

module.exports = router;

import express from 'express';
import bodyParser from 'body-parser';
import Products from "./data/Products";
import CartList from "./data/CartList";

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 8080;

const cartList = CartList;
const cartTotalQuantity = cartList.reduce((prev, curr) => prev + curr.quantity, 0);

const Cart = {
    cartList: cartList,
    cartTotalQuantity: cartTotalQuantity,
}

// const connectDB = require('./config/db/index');
// const authRouter = require('./routes/auth');

// connectDB.connectDB();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json());
// app.use('/api/auth', authRouter);

//Product Router
app.get('/api/products', (req, res) => {
    res.json(Products);
})

app.get("/api/products/:id", (req, res) => {
    // console.log(req.params);
    // res.send(typeof Products[0].id);
    const singleProduct = Products.find(item => item.id === req.params.id);
    res.json(singleProduct);
})

//Cart Router
app.get('/api/cart', (req, res) => {
    res.json(Cart);
})

app.post('/api/cart/', (req, res) => {
    console.log("request body: ", req.body);
    cartList.push(req.body.cartItem);
    console.log(cartList);
    // res.json(cartList);
})

app.listen(PORT, () => {
    console.log(`PORT ${PORT}: Server running.....`);
})
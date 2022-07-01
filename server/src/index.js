import express, { request } from 'express';
import bodyParser from 'body-parser';
import Products from "./data/Products";
import CartList from "./data/CartList";

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 8080;

let cartList = CartList;
let cartTotalQuantity = cartList.reduce((prev, curr) => prev + curr.quantity, 0);

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
app.post('/api/cart/', (req, res) => {
    console.log("request body: ", req.body);
    let cartItem = req.body.cartItem
    let checkExist = cartList.findIndex(item => item.id === cartItem.id);
    if ( checkExist < 0) {
        cartList.push(cartItem);
    } else (cartList[checkExist].quantity += cartItem.quantity);
    
    console.log(cartList);
    // let quantity = cartList.reduce((prev, curr) => prev + curr.quantity, 0);
    cartTotalQuantity += cartItem.quantity;
    res.json({quantity: cartTotalQuantity});
})

app.delete('/api/cart/:id', (req, res) => {
    console.log("delete request body: ", req.params);
    cartList = cartList.filter(item => item.id !== req.params.id)
    res.json(cartList);
})

app.put('/api/cart/:check/:id', (req, res) => {
    let index = cartList.findIndex(item => item.id === req.params.id);
    let checkAmount =  cartList[index].quantity;
    switch (req.params.check) {
        case 'increase':
            cartList[index].quantity +=  checkAmount < 12 ? 1 : 0;
            cartTotalQuantity += checkAmount < 12 ? 1 : 0;
            break;
        case 'decrease':
            cartList[index].quantity -= checkAmount > 1 ? 1 : 0;
            cartTotalQuantity -= checkAmount > 1 ? 1 : 0;
            break;
        default: ;
    }
    res.json(cartTotalQuantity);
})

app.get('/api/cart', (req, res) => {
    let Cart = {
        cartList: cartList,
        cartTotalQuantity: cartTotalQuantity,
    };

    res.json(Cart);
})

app.listen(PORT, () => {
    console.log(`PORT ${PORT}: Server running.....`);
})
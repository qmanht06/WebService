import express from 'express';
import Products from "./src/data/Products";
import Cart from "./src/data/Cart";

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 8080;

// const connectDB = require('./config/db/index');
// const authRouter = require('./routes/auth');

// connectDB.connectDB();

app.use(express.json());
// app.use('/api/auth', authRouter);

app.get('/api/products', (req, res) => {
    res.json(Products);
})

app.get('/api/cart', (req, res) => {
    res.json(Cart);
})

app.listen(PORT, () => {
    console.log(`PORT ${PORT}: Server running.....`);
})
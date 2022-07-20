const express = require("express");
const dotenv = require("dotenv");

const app = express();
app.use(express.json());
dotenv.config();
const authRouter = require('./routes/auth')
const categoryRouter = require('./routes/categoryRouter')
const orderRouter = require('./routes/orderRouter')
const connectDB = require("./config/db/index");

const productRouter = require("./routes/product");

app.use('/api/auth', authRouter)
app.use('/api/categories', categoryRouter)
app.use('/api/orders', orderRouter)
connectDB.connectDB();

app.use("/api/product", productRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

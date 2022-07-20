const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const express = require("express");
const dotenv = require("dotenv");

const app = express();
app.use(express.json());
dotenv.config();

app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

const connectDB = require("./config/db/index");
const authRouter = require('./routes/auth')
const categoryRouter = require('./routes/categoryRouter')
const orderRouter = require('./routes/orderRouter')
const productRouter = require("./routes/product");
const cartRouter = require("./routes/cartRouter")

connectDB.connectDB();

app.use('/api/categories', categoryRouter)
app.use('/api/orders', orderRouter)

app.use("/api/users", authRouter);
app.use("/api/product", productRouter);
app.use("/api/cart", cartRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

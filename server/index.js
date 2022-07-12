const express = require("express");
const dotenv = require("dotenv");

const app = express();
app.use(express.json());
dotenv.config();

const connectDB = require("./config/db/index");

const authRouter = require("./routes/auth");
const productRouter = require("./routes/product");
const userRouter = require("./routes/userRoutes");
const { notFound, errorHandler } = require("./middlewares/errorMiddleware");

connectDB.connectDB();

app.use("/api/users", userRouter);
//app.use("/api/auth", authRouter);
app.use("/api/product", productRouter);



app.use(notFound);
app.use(errorHandler);
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

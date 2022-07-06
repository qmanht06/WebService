const express = require('express')
const app = express()
app.use(express.json())

const connectDB = require('./config/db/index')

const authRouter = require('./routes/auth')
const productRouter = require('./routes/product')

connectDB.connectDB()

app.use('/api/auth', authRouter)
app.use('/api/product', productRouter)

const PORT = 5000

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
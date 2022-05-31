const express = require('express')
const app = express()
const connectDB = require('./config/db/index')

connectDB.connectDB()

app.get('/', function (req, res) {
  res.send('Hello World')
})

const PORT = 5000

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
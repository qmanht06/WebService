const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserChema = new Schema({
    username: {

    },
    password: {

    },
},  {
    timestamps: true
})

module.exports = mongoose.model('user', UserChema)
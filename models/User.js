const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserChema = new Schema({
    userName: {
        type: String
    },
    password: {
        type: String
    },
    fullName: {
        type: String
    },
    email: {
        type: String
    },
    permission: {
        type: String,
        enum: ['User', 'Admin']
    }
},  {
    timestamps: true
})

module.exports = mongoose.model('user', UserChema)
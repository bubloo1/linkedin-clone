const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    createdOn:{
        type: String,
    }
})

module.exports = mongoose.model('User', userSchema)
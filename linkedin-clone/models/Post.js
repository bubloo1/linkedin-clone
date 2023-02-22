const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    user_id:{
        type: String,
        require: true
    },

    username:{
        type: String,
        require: true
    },

    postContent:{
        type: String,
        require: true
    },

    currentUserPostCount:{
        type: String,
        require: true
    },

    createdOn:{
        type: String,
    }
})

module.exports = mongoose.model('Post', postSchema)
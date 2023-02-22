<<<<<<< HEAD:linkedin-clone/controllers/postController.js
const postModel = require('../models/Post')
const userModel = require('../models/User')
const sessionStorage = require('sessionstorage-for-nodejs')

const getAllPost = async (req, res) => {
    
    const posts = await postModel.find().sort({_id:-1}).limit(1).lean()
    const newLength = postModel.findOne(sessionStorage.getItem('name'))
    console.log(newLength.posts)

    return res.json(posts)
}


const addNewPost = async (req,res) => {
    const { id, content} = req.body

    const findUser = await userModel.findById(id).exec()

    if(!findUser){
        return res.status(401).json({ message: "user not found"})
    }


    const date = new Date().toLocaleString()
    const postObject = {
        user_id:id,
        username: findUser.username,
        postContent: content,
        currentUserPostCount: 1,
        createdOn: date,
    }

    const user =  await postModel.create(postObject)

    if(!user){
        return res.json({ message: "your post has not been added"})
    } else{
        return res.json({ message: "your post has been added:)"})
    }
    
}

=======
const postModel = require('../models/Post')
const userModel = require('../models/User')
const sessionStorage = require('sessionstorage-for-nodejs')

const getAllPost = async (req, res) => {
    
    const posts = await postModel.find().sort({_id:-1}).limit(1).lean()
    const newLength = postModel.findOne(sessionStorage.getItem('name'))
    console.log(newLength.posts)

    return res.json(posts)
}


const addNewPost = async (req,res) => {
    const { id, content} = req.body

    const findUser = await userModel.findById(id).exec()

    if(!findUser){
        return res.status(401).json({ message: "user not found"})
    }


    const date = new Date().toLocaleString()
    const postObject = {
        user_id:id,
        username: findUser.username,
        postContent: content,
        currentUserPostCount: 1,
        createdOn: date,
    }

    const user =  await postModel.create(postObject)

    if(!user){
        return res.json({ message: "your post has not been added"})
    } else{
        return res.json({ message: "your post is added"})
    }
    
}

>>>>>>> a29c6ecc76ae18c4d93ae2d75573c176f79ae1b6:controllers/postController.js
module.exports = {addNewPost, getAllPost}
const userModel = require('../models/User')
const asyncHandler = require('express-async-handler')
const bcrypt = require('bcrypt')
const session = require('express-session')
const sessionStorage = require('sessionstorage-for-nodejs')



const getAllUsers = asyncHandler( async (req, res) => {
    const users = await userModel.find().select('-password').lean()
    if(!users?.length){
        return res.status(400).json({ message: 'No users found'})
    }
    console.log(req.socket.localAddress)
    res.json(users)
})

const getUserById = async (req, res) => {
    const f = await userModel.findOne({_id:sessionStorage.getItem('name')})
    return res.json({message: `${f._id}`})   
}

const createNewUser = asyncHandler(async (req, res) => {
   
    const { username, password } = req.body

    // check if we got both the fields
    if(!username || !password ){
        return res.status(400).json({ message: 'All fields required'})
    }

    // check for duplicated
    const duplicate = await userModel.findOne({ username }).lean().exec()
    if(duplicate){
        return res.status(400).json({ message: "Duplicate username"})
    }

    const hashedPwd = await bcrypt.hash(password, 10)

    const date = new Date().toLocaleString()
   
    const userObject = { username, "password": hashedPwd, "createdOn": date}

    const user = await userModel.create(userObject)

    if(user){
        res.status(201).json({ message: `new user ${username} created`})
    }else{
        res.status(400).json({ message: 'Invalid user data received'})
    }
    console.log("Noice! Noice!")

})

const updateUser = asyncHandler( async (req, res) => {
    const {id, username, password } = req.body

    if(!id || !username || !password){
        return res.status(400).json({ message: "All fields are required"})
    }

    const findUser = await userModel.findById(id).exec()
    console.log(findUser)
    if(!findUser){
        return res.status(409).json({ message: "User not found"})
    }

    const duplicate = await userModel.findOne({ username }).lean().exec()

    if(duplicate){
        return res.status(409).json({ message: "Duplicate username"})
    }

    const date = new Date().toLocaleString()
    
    findUser.username = username
    findUser.createdOn = date

    if(password){
        // hash password
        findUser.password = await bcrypt.hash(password, 10)
    }

    const updatedUser = await findUser.save()
    console.log(updatedUser)
    res.json({ message: `${updatedUser.username} updated`})
})

module.exports = { getAllUsers, createNewUser, updateUser, getUserById}
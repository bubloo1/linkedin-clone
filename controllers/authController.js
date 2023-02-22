const userModel = require('../models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')
const sessionStorage = require('sessionstorage-for-nodejs')

const login = asyncHandler( async (req, res) => {
    const {username, password } = req.body

    if(!username || !password){
        return res.status(400).json({ message: "All fileds required"})
    }

    const findUser = await userModel.findOne({ username }).exec()

    if(!findUser){
        return res.status(401).json({ message: "Unauthorized"})
    }

    const match = await bcrypt.compare(password, findUser.password)

    if(!match) {
        return res.status(401).json({ message: 'Unauthorized'})
    }

    sessionStorage.setItem('name', findUser._id)
    
    const accessToken = jwt.sign(
        {
            "UserInfo":{
                "username":findUser.username
            }
        },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: '15m'}
    )

    const refreshToken = jwt.sign(
        {"username": findUser.username},
        process.env.REFRESH_TOKEN_SECRET,
        { expiresIn: '7d'}
    )

    res.cookie('jwt', refreshToken, {
        httpOnly: true,
        // secure: true,
        // sameSite: 'None',
        maxAge: 7 * 24 * 60 * 60 * 1000
    })

    res.json({ accessToken})

})



const refresh = (req, res) => {
    const cookies = req.cookies

    if(!cookies) return res.status(401).json({ message: 'nauthorized'})
    const refreshToken = cookies.jwt
    console.log(refreshToken)
    jwt.verify(
        refreshToken,
        process.env.REFRESH_TOKEN_SECRET,
        async (err, decoded) => {
            console.log(err)
            if(err) return res.status(403).json({ message: 'Forbidden'})

            const findUser = await userModel.findOne({ username: decoded.username }).exec()

            if(!findUser) return res.status(401).json({ message: 'Unauthorized'})

            const accessToken = jwt.sign(
                {
                    "UserInfo": {
                        "username": findUser.username,
                    }
                },
                process.env.ACCESS_TOKEN_SECRET,
                { expiresIn: '15m'}
            )
            res.json({ accessToken })
        }
    )
}

const logout = (req, res) => {
    const cookies = req.cookies
    if(!cookies?.jwt) return res.sendStatus(204)
    res.clearCookie('jwt', { httpOnly: true, sameSite: 'None', secure: true})
    res.json({ message: 'Cookie cleared'})
}

module.exports = {
    login,
    refresh,
    logout
}


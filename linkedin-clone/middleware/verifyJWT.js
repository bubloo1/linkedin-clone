const jwt = require('jsonwebtoken')

const verifyJWT = (req, res, next) => {
    const authHeader = req.headers.authorization || req.headers.Authorization
    console.log(authHeader, "authHeader")
    if(!authHeader?.startsWith('Bearer ')){
        console.log('gggg')
        return res.status(401).json({ message: 'Unauthorized'})
    }
    const token = authHeader.split(' ')[1]
    console.log(token,"Token")

    jwt.verify(
        token,
        process.env.ACCESS_TOKEN_SECRET,
        (err, decoded) => {
            console.log(err)
            if(err) return res.status(403).json({ message: 'Forbidden'})
            req.user = decoded.UserInfo.username
            next()
        }
    )
}

module.exports = verifyJWT


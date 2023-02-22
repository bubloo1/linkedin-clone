const allowedOrigins = require('./allowedOrigins')

const corsOprions = {
    origin: (origin, callback) => {

        if(allowedOrigins.indexOf(origin) !== -1 || !origin){
            callback(null, true)
        }else{
            callback(new Error('Not allowed by cors'))
        }
    },
    credential: true,
    optionsSuccessStatus: 200,
}

module.exports = corsOprions
require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const cookieParser = require('cookie-parser')
const mongoose = require('mongoose')
const session = require('express-session')
const connectDB = require('./config/dbConn')
const corsOptions = require('./config/corsOptions')
mongoose.set('strictQuery', false);
const PORT = 3500


connectDB()

app.use(express.json())

app.use(cors(corsOptions))

app.use(cookieParser())


app.use('/auth',require('./routes/authRoutes'))
app.use('/user',require('./routes/userRoutes'))
app.use('/post',require('./routes/postRoutes'))


mongoose.connection.once('open', () => {
    console.log('Connected to MongoDb')
    app.listen(PORT, () => console.log(`Server is running on ${PORT}`))
})


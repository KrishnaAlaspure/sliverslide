const express = require('express')
const session = require('express-session');
const authRouter = require('./routes/authRouter') 
const cors = require('cors')
require('dotenv').config()
require('./models/dbCoonection')
const PORT = process.env.PORT || 8080

const app = express()

app.use(express.json())
app.use(cors())
app.use(
    session({
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: true,
        cookie: { secure: false},
    })
)

app.get('/', (req,res)=>{
    res.send('Hello')
})

app.use('/auth',authRouter)

app.listen(PORT,()=>{
    console.log(`Server is Running on PORT : ${PORT}`);
    
})

module.exports = app
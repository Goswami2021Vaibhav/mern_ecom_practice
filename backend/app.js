const express = require('express')
const errorMiddleware = require('./middleware/error')
const cookieParser = require('cookie-parser')
const app = express()

app.use(express.json())
app.use(cookieParser())
// route export  
const product = require('./routes/productRoutes')
const user = require('./routes/userRoutes')
app.use('/api/v1', product)
app.use('/api/v1', user)

// middleware from error 
app.use(errorMiddleware)
module.exports = app   
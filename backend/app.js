const express = require('express')
const errorMiddleware = require('./middleware/error')
const app = express()

app.use(express.json())
// route export  
const product = require('./routes/productRoutes')

app.use('/api/v1', product)

// middleware from error 
app.use(errorMiddleware)
module.exports = app   
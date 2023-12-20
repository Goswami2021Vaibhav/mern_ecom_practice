const express = require('express')
const app = express()

app.use(express.json())
// route export  
const product = require('./routes/productRoutes')

app.use('/api/v1', product)
module.exports = app
const config = require('./utils/config')
const express = require('express')
require('express-async-errors')
const app = express()
const path = require('path');
const cors = require('cors')

const shopRouter = require('./controllers/shop')
const cartRouter = require('./controllers/cart')
const productsRouter = require('./controllers/products')

const middleware = require('./utils/middleware')
const logger = require('./utils/logger')
const morgan = require('morgan')
const mongoose = require('mongoose')

logger.info('\x1b[42m connected to \x1b[0m', config.MONGODB_URI)

mongoose.connect(config.MONGODB_URI)
  .then(() => {
    console.log('\x1b[42m connected to MongoDB\x1b[0m')
  })
  .catch((error) => {
    console.log('\x1b[41m error connecting to MongoDB:\x1b[0m', error.message)
  })
app.use(cors())



app.use(express.json())

morgan.token('body', function (req) {
  return JSON.stringify(req.body)
})
app.use(morgan('dev'))
app.use(morgan(' \x1b[35m :body  \x1b[0m'))

app.use('/shops', shopRouter)
app.use('/orders', cartRouter)
app.use('/products', productsRouter)
app.use(express.static('build'))
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
});

app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

module.exports = app





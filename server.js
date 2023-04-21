const express = require('express')
const app = express()
const cors = require('cors') //Allows code to run on server AND localstorage.
const PORT = 8000
const product = require('./api/product') //./api/product

app.use(cors())

app.use("/", product);

app.listen(process.env.PORT || PORT, ()=>{   //process.env.PORT is the server on Heroku
    console.log(`The server is running on port ${PORT}! You better go catch it!`)
})
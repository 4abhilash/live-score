const express = require('express')

const app = express()
var bodyParser = require('body-parser')
var morgan = require('morgan')
var mongoose = require('mongoose')
const over = require('./models/over')

const overRouter = require('./routes/overRouter')

app.use(bodyParser.json())
app.use(morgan('dev'))

mongoose.connect('mongodb://localhost:27017/livescore')

mongoose.connection.once('open',function(){
    console.log("DB Connection Established")
})

app.listen(5000,function(){
    console.log("EXPRESS RUNNING ON PORT 5000")
})


app.use("/api/v1", overRouter)
const express = require('express')

const app = express()
const port = 5000


const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://castle:castle1234@boiler-plate.mropl.mongodb.net/boiler-plate?retryWrites=true&w=majority', {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MongoDB connected...'))
    .catch(err => console.log(err))

app.get('/', (req, res) => res.send("hello world"))

app.listen(port, () => console.log(`example app listening on port ${port}`))
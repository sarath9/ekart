const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')

app.use(cors())
app.use(express.json())
app.get('/test', (req,res) => {
    res.send('Hello world')
})
app.post('/api/register', (req,res) => {
    console.log(req.body)
    res.send('Hello world')
})

app.listen(5001, () => {
    console.log('Server started on 5001');
})
require('dotenv').config()
const express = require ('express')
const app = express()
const port = 4000
const userRouter = require('./Routes/routes')
const mongoose = require ('mongoose')


mongoose.connect('mongodb+srv://krishnadas10official:tG85SfwDbsceuQnh@cluster0.hioogkx.mongodb.net/note-taking').then(() => console.log('DB Connected'))
app.use(express.json())
app.use('/user',userRouter)

app.listen(port,(req,res)=>{
    console.log(`app is listen ${port}`)
})
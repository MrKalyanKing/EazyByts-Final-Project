import express, { Router } from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import cors from 'cors'
import router from './Router/Router.js'
dotenv.config()

const app=express()
const port=8080
const url=process.env.MONGO_URL

// middleware

app.use(bodyParser.json())
app.use(cors())
app.use('/api',router)
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.get('/',async(req,res)=>{
    res.send("Helo")
})


app.listen(port,()=>{
  console.log(`App is Listening ${port}`)
})
mongoose.connect(url)
.then(()=>{
    console.log(`DB Connected`)
})
.catch((err)=>{
    console.log(`Err in connection DB ${err}`)
})
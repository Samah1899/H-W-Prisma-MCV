import express,{Application} from "express";
import userRouter from './routes/user.route'
import blogRouter from './routes/blog.route'
import {connectDB} from '../src/config/db'

const app:Application=express()
const PORT:Number=3008
connectDB()
app.use(express.json())
app.use('/users',userRouter)
app.use('/blogs',blogRouter)
app.listen(PORT,()=>{console.log("express listening on port "+PORT)})

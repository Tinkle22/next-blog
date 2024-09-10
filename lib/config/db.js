import { Console } from 'console'
import mongoose from 'mongoose'

export const ConnectDB = async () =>{
    await mongoose.connect('mongodb+srv://CMT:cmt400@fuckOFF@cluster0.omb5i.mongodb.net/blog-app')
    console.log("Db connected")
}
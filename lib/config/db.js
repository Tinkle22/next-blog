import mongoose from 'mongoose'

export const ConnectDB = async () =>{
   try {
    await mongoose.connect(process.env.MONGO_URI)
    console.log("connected")
   } catch (error) {
    console.log("not connected")
   }
}
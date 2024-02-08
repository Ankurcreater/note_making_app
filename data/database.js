import mongoose from "mongoose"
// import {User} from '../models/user.js'

export const connectDB = () =>{
    mongoose.connect(process.env.MONGO_URL,{
    dbname: "Notes-api"
}).then((c) => console.log(`Database Connected with ${c.connection.host}`))
    .catch((e) => console.log(e))};
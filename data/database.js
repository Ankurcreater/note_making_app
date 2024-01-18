import mongoose from "mongoose"

export const connectDB = () =>{
    mongoose.connect(process.env.MONGO_URL,{
    dbname: "Notes-api"
}).then(() => console.log("Database Connected"))
    .catch((e) => console.log(e))};
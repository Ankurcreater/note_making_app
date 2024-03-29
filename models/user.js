import mongoose from "mongoose";

const schema = new mongoose.Schema({
    name: String,
    email: {
        type:String,
        required:true,//it states that it's mandatory
        unique:true
    },
    password: {
        type:String,
        required:true,
        select: false,// so directky acess nhi kr skte usme .select("+password") krna hoga find me
    },
    createdAt: {  // to know that when user is created his account
        type:Date,
        required:true,
        default:Date.now,
    },
});

export const User = mongoose.model("User", schema);

import mongoose from "mongoose";

const schema = new mongoose.Schema({
    title: {
        type:String,
        unique:true,
        required:true
    },
    description: {
        type:String,
        required:true,
    },
    isCompleted: {
        type:Boolean,
        default: false,

    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",//this make sure jo uper se mili vo kiski hai User Collection me jo user hai uski 😁
        required:true,

    },
    createdAt: {  // to know that when user is created his account
        type:Date,
        default:Date.now,
    },
});

export const Task = mongoose.model("Task", schema);

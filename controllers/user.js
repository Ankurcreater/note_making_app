import jwt from "jsonwebtoken";
import { User } from "../models/user.js";
import bcrypt from 'bcrypt'
import { sendCookie } from "../utils/features.js";

export const getAllUsers  = async (req, res) => {
    
}
export const register = async (req, res,next) => {
    //If User is Present
    const {name,email,password} = req.body;
    //finding user
    let user = await User.findOne({email});
    if(user) return res.status(404).json({
        success:false,
        message:"User is already Exist"

    });
    
// If User is new
const hashedPassword = await bcrypt.hash(password, 10);
  user = await User.create({name,email,password:hashedPassword});
        // Continue with user creation
        sendCookie(user,res,"Register Successfully",201);
    
};
    
export const Login = async (req,res,next) =>{
    const {email,password} = req.body;
    let user = await User.findOne({email}).select("+password");//because password is select false by default(i set)
    if(!user) return res.status(404).json({
        success:false,
        message:"Invalid Email or Password"
    });
    // if user is existed
    const isMatch = await bcrypt.compare(password,user.password);
    if(!isMatch) return res.status(404).json({
        success:false,
        message:"Invalid Email or Password"
    });
    sendCookie(user,res,`Welcome back,${user.name}`,200)
    }

 export const getUserDetails = async (req,res) =>{
       
    }

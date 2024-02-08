import { User } from "../models/user.js";//Don't Forget .js

//  export const getAllUsers  = async (req, res) => {
//     const users = await User.find({});
//     // console.log(req.query);
//     // To Acess
//     const keyword = req.query.keyword;
//     // console.log(keyword);
//     res.json({
//         success: true,
//         users,
//     });
// }
export const getAllUsers  = async (req, res) => {
    
}


//export const register = async (req, res,next) => {
//     const { name, email, password } = req.body;


//     await User.create({
//         name,
//         email,
//         password,
//     });
//     next()
//     res.status(201).cookie("temp","sample").json({// so we can give status to show diff diff it's good to send status according to request type
//         // we can send also
//         success: true,
//         message: "Registered Successfully",
//     });

// }
export const register = async (req, res,next) => {
    

    }

    export const Login = async (req,res,next) =>{

    }


    // export const specialfunc = (req,res)=>{
    //     res.json({
    //         success:true,
    //         message:"Joking"
    //     })
    // }
    // This is for get user details by giving id as a query
    export const getUserDetails = async (req,res)=>{// after colan its take as a param present it's dynamic routing set it in last good practise
        const { id } = req.params;
        // console.log(req.params);
        const user = await User.findById(id);
        // console.log(user);
        res.json({
            success:true,
            user,
        });
    }

    // export const updateUser = async (req,res)=>{// after colan its take as a param present it's dynamic routing set it in last good practise
    //     const { id } = req.params;
    //     // console.log(req.params);
    //     const user = await User.findById(id);
    //     // console.log(user);
    //     res.json({
    //         success:true,
    //         message:"Updated",
    //     });
    // }

    // export const deleteUser = async (req,res)=>{// after colan its take as a param present it's dynamic routing set it in last good practise
    //     const { id } = req.params;
    //     // console.log(req.params);
    //     const user = await User.findById(id);
    //     // console.log(user);
    //     res.json({
    //         success:true,
    //         message:"Deleted",
    //     });
    // }
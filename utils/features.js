import jwt from 'jsonwebtoken'

export const sendCookie = (user,res,message,statusCode) =>{

    //Create Cookie
    const token = jwt.sign({_id:user._id},process.env.JWT_SECRETCODE)
    // console.log(process.env.NODE_ENV ==="Development" );

    res.status(statusCode)
    .cookie("token",token,{
        httpOnly:true,
        maxAge:15*60 * 1000,
        sameSite:process.env.NODE_ENV ==="Development" ? 'lax':"none",
        secure:process.env.NODE_ENV ==="Development" ? false: true, // ab postman me cookie nhi aege
    }).json ({
        success:true,
        message,
    });
    

};
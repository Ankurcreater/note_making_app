class ErrorHandler extends Error{
constructor(message,statusCode) {
    super(message);
    this.statusCode = statusCode;
}
}



// when i call next with an error it will call as error middleware
// Also we can acess erorr using err.messege
export const errorMiddleWare = (err,req,res,next)=> {
//if exist krta hai then vo hoga else ye
    err.message = err.message || "Internal Server Eror"
    err.statusCode = err.statusCode || 500;
    return res.status(err.statusCode).json({
        success:false,
        message: err.message,
      })
}

export default ErrorHandler;
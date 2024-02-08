import ErrorHandler from "../middlewares/error.js";
import { Task } from "../models/task.js";

export const newTask = async (req, res, next) => {
  try {
    const { title, description } = req.body;

    // Check if title and description are provided
    if (!title || !description) {
      return res.status(400).json({
        success: false,
        message: "Title and description are required.",
      });
    }

    // Create a new task
    const createdTask = await Task.create({
      title,
      description,
      user: req.user,
    });

    res.status(201).json({
      success: true,
      message: "Task added successfully",
    //   task: createdTask, // Optionally, send back the created task in the response
    });
  } catch (error) {
  next(new ErrorHandler(error))

    // Handle specific validation errors
    // if (error.name === "ValidationError") {
    //   return res.status(400).json({
    //     success: false,
    //     message: "Validation error. Check your input data.",
    //     errors: error.errors,
    //   });
    // }

    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};
// user ke all tasks return krna hai isme 
export const getMyTask = async (req,res,next) =>{
  try {
    const userid = req.user._id;

const tasks = await Task.find({user:userid});// find method returns array


res.status(201).json({
  success:true,
  tasks,
});

  } catch (error) {
    next(new ErrorHandler(error))
  }
};
// Update task
//Update means here we will check in the box
export const UpdateTask = async (req,res,next) =>{

  try {
    const task = await Task.findById(req.params.id);
if(!task) return next(new ErrorHandler("Invalid Id",404))
  // opposite checked hai to uncheck or vise versa
  task.isCompleted = !task.isCompleted ;
  await task.save()
  res.status(201).json({
    success:true,
    messege:"Task Updated!"
    
  })
  } catch (error) {
    next(new ErrorHandler(error))
    
  }
  
  
};

export const deleteTask = async (req,res,next) =>{
  try {
    const task = await Task.findById(req.params.id);
  if(!task) return next(new ErrorHandler('Task not found',404))
  // After 7 remove method is no longer in use instead deleteOne() or deleteMany()
  await task.deleteOne()
  res.status(201).json({
    
    success:true,
    messege: "Task Deleted!"
    
  })  

  } catch (error) {
    next(new ErrorHandler(error))
    
  }
};

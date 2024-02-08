import express from 'express'
import userRouter from "./routes/user.js"
import taskRouter from './routes/task.js'
import {config} from "dotenv";
import cookieParser from 'cookie-parser';
import { errorMiddleWare } from './middlewares/error.js';
import cors from 'cors';
config({
    path:"./data/config.env"
}) 

    export const app = express();
//Using Middleware
app.use(express.json());
app.use(cookieParser());
//Using routes
app.use("/api/v1/users",userRouter);
app.use("/api/v1/task",taskRouter);
app.use(cors({
    origin:[process.env.FRONTEND_URL],
    methods:["GET","POST","PUT","DELETE"],
    // headers pohuchenge in frontend like cookie we created without it no 
    credentials:true,

}))

app.get("/", (req, res) => {
    res.send("Nicely Worked")
});
//This is error handler so if you call next after last middleware with err it will calll this with no app crash
app.use(errorMiddleWare)

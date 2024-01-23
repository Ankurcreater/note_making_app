import express from 'express';

import userRouter from "./routes/user.js"
import {config} from "dotenv";
config({
    path:"./data/config.env"
}) 

    export const app = express();
//Using Middleware
app.use(express.json());
//Using routes
app.use("/api/v1/users",userRouter);




app.get("/", (req, res) => {
    res.send("Nicely worked");
});


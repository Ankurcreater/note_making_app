import express from "express";
import {User} from "../models/user.js"
// import bcrypt from 'bcrypt'
import { Login,  getMyProfile, Logout, register} from "../controllers/user.js";
import { isAuthenticated } from "../middlewares/auth.js";


const router = express.Router();

// router.get("/all",getAllUsers);

router.post("/register", register);
// router.post("/register",register);
router.post("/login",Login);

// router.get("/user-id/special",specialFunction);

// router.route("/user-id/:id").get(getMyProfile)
router.get('/me',isAuthenticated,getMyProfile)
router.get('/logout',Logout);

// router.route("/user-id/:id").get(dynamicQuery).put(updateUser).delete(deleteUser)

// router.get("/user-id/:id",dynamicQuery);

// router.put("/user-id/:id",updateUser);
    
// router.delete("/user-id/:id",deleteUser);


 export default  router;
import express from "express";
import {User} from "../models/user.js"
import { Login, getAllUsers, getUserDetails, register} from "../controllers/user.js";

const router = express.Router();

router.get("/all",getAllUsers);

router.post("/new", register);
router.post("/login",Login);

// router.get("/userid/special",specialfunc);

router.route("/userid/:id").get(getUserDetails)

// router.route("/userid/:id").get(dynamicQuery).put(updateUser).delete(deleteUser)

// router.get("/userid/:id",dynamicQuery);

// router.put("/userid/:id",updateUser);
    
// router.delete("/userid/:id",deleteUser);


 export default  router;
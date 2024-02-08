import express from 'express'
import { UpdateTask, deleteTask, newTask } from '../controllers/task.js';
import { isAuthenticated } from '../middlewares/auth.js';
import { getMyTask } from '../controllers/task.js';


const router  = express.Router();

router.post('/new',isAuthenticated,newTask);
router.get('/my',isAuthenticated,getMyTask);
// because both update and delete will have same url
router.route("/:id").put(isAuthenticated,UpdateTask).delete(isAuthenticated,deleteTask)




export default router;

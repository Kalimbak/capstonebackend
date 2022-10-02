import {login, signup, getUsers, updateUser, deleteUser} from '../controllers/user.js';
import express from 'express';
import  { authMiddleware,isAdmin} from "../middlewares/usermiddle.js";
import { reset } from '../controllers/resetpassword.js';

const router = express.Router()

 router.post('/user/signup', signup);

 router.post('/user/login', login);

 router.post('/user/reset', reset)

 router.get('/users', getUsers);

 router.delete('/user/:id',authMiddleware,isAdmin, deleteUser);

 router.patch('/user/:id', authMiddleware,isAdmin, updateUser);
 
 export default router;
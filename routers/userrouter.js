import {login, signup, getUsers, updateUser, deleteUser} from '../controllers/user.js';
import express from 'express';
import  { authMiddleware,isAdmin} from "../middlewares/usermiddle.js";

const router = express.Router()

 router.post('/user/signup', signup);

 router.post('/user/login', login);

 router.get('/users',authMiddleware,isAdmin, getUsers);

 router.delete('/user/:id',authMiddleware,isAdmin, deleteUser);

 router.patch('/user/:id', authMiddleware,isAdmin, updateUser);
 
 export default router;
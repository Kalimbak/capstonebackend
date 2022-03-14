import express from "express";
import {createMessage, getMessage, getMessages, updateMessage, deleteMessage} from '../controllers/messages.js';
import  { authMiddleware,isAdmin} from "../middlewares/usermiddle.js";

const router = express.Router();


router.post('/messages', createMessage)
router.get('/messages', authMiddleware, isAdmin, getMessages)
router.get('/messages/:id', authMiddleware, isAdmin, getMessage)
// router.patch('/messages/:id', updateMessage)
router.delete('/messages/:id', authMiddleware, isAdmin, deleteMessage)

export default router;

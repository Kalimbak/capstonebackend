import express from "express";
import {createMessage, getMessage, getMessages, updateMessage, deleteMessage} from '../controllers/messages.js';


const router = express.Router();


router.post('/messages', createMessage)
router.get('/messages',getMessages)
router.get('/messages/:id', getMessage)
router.patch('/messages/:id', updateMessage)
router.delete('/messages/:id', deleteMessage)

export default router;

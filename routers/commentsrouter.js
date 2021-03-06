import express from "express";
import {createComment, getComments, getComment, deleteComment} from '../controllers/comments.js';
import  {authMiddleware, isAdmin} from "../middlewares/usermiddle.js";

const router = express.Router();


router.post('/blogs/:id/Comments', createComment)
router.get('/blogs/:id/Comments',  getComments)
router.get('/blogs/:id/Comments/:id', getComment)
router.delete('/blogs/:id/Comments/:id', authMiddleware, isAdmin, deleteComment)

export default router;

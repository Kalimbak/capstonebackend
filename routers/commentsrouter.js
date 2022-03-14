import express from "express";
import {createComment, getComments, getComment, deleteComment} from '../controllers/comments.js';
import  {authMiddleware, isAdmin} from "../middlewares/usermiddle.js";

const router = express.Router();


router.post('/Comments', createComment)
router.get('/Comments', authMiddleware, isAdmin, getComments)
router.get('/Comments/:id', authMiddleware, isAdmin, getComment)
router.delete('/Comments/:id', authMiddleware, isAdmin, deleteComment)

export default router;

import express from "express";
import {createComment, getComments, getComment, deleteComment} from '../controllers/comments.js';


const router = express.Router();


router.post('/Comments', createComment)
router.get('/Comments',getComments)
router.get('/Comments/:id', getComment)
router.delete('/Comments/:id', deleteComment)

export default router;

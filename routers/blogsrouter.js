import express from "express";
// import multer from "multer";
// import cloudinary from "../utils/cloudinary.js";
import upload from '../utils/multer.js'

import { getAllArticles, createArticle,getOneArticle,modifyArticle,deleteArticle, getArticle} from "../controllers/blogs.js";

import  {authMiddleware, isAdmin} from "../middlewares/usermiddle.js";




const router = express.Router();

router.get('/blog', authMiddleware, isAdmin, getAllArticles);

router.post('/blogs',  authMiddleware, isAdmin,   upload.single('image'), createArticle);

router.get('/blogs/:id', authMiddleware, isAdmin, getOneArticle);

router.patch('/blogs/:id',authMiddleware, getArticle, isAdmin, modifyArticle);

router.delete('/blogs/:id',authMiddleware, isAdmin, deleteArticle);




 






export default router;
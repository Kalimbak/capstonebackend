import express from "express";
// import multer from "multer";
// import cloudinary from "../utils/cloudinary.js";
import upload from '../utils/multer.js'

import { getAllArticles, createArticle,getOneArticle,modifyArticle,deleteArticle, getArticle} from "../controllers/blogs.js";

import  {authMiddleware} from "../middlewares/usermiddle.js";



const router = express.Router();

router.get('/blog', getAllArticles);




router.post('/blogs',  authMiddleware, upload.single('image'), createArticle);

router.get('/blogs/:id', authMiddleware, getOneArticle);

router.patch('/blogs/:id',authMiddleware, getArticle, modifyArticle);

router.delete('/blogs/:id',authMiddleware, deleteArticle);



 






export default router;
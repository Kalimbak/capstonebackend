import express from "express";
// import multer from "multer";
// import cloudinary from "../utils/cloudinary.js";
import upload from '../utils/multer.js'

import { getAllArticles, createArticle,getOneArticle,modifyArticle,deleteArticle, getArticle} from "../controllers/blogs.js";

import  {authMiddleware, isAdmin} from "../middlewares/usermiddle.js";




const router = express.Router();

router.get('/blog', getAllArticles);

router.post('/blogs',    upload.single('image'), createArticle);

router.get('/blogs/:id',  getOneArticle);

router.patch('/blogs/:id',authMiddleware, getArticle, isAdmin, modifyArticle);

router.delete('/blogs/:id',authMiddleware, isAdmin, deleteArticle);




 






export default router;
import express from "express";
// import multer from "multer";
// import cloudinary from "../utils/cloudinary.js";
import upload from '../utils/multer.js'

import { getAllArticles, createArticle,getOneArticle,modifyArticle,deleteArticle, getArticle} from "../controllers/blogs.js";

// import  {authMiddleware, isAdmin} from "../middlewares/usermiddle.js";
import  {authMiddleware, isAdmin} from "../middlewares/usermiddle.js";




const router = express.Router();

router.get('/blog', getAllArticles);




router.post('/blogs',  authMiddleware, isAdmin,   upload.single('image'), createArticle);

// router.post('/blogs',  authMiddleware, isAdmin,   upload.single('image'), createArticle);


router.get('/blogs/:id', authMiddleware, getOneArticle);

router.patch('/blogs/:id',authMiddleware, getArticle, modifyArticle);

// router.patch('/blogs/:id',authMiddleware, isAdmin, getArticle, modifyArticle);


// router.delete('/blogs/:id',authMiddleware, isAdmin, deleteArticle);

router.delete('/blogs/:id',authMiddleware, isAdmin, deleteArticle);




 






export default router;
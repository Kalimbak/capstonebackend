import express from "express";
// import multer from "multer";
// import cloudinary from "../utils/cloudinary.js";
import multer from "multer";
import path from "path";


import { getAllArticles, createArticle,getOneArticle,modifyArticle,deleteArticle, getArticle} from "../controllers/blogs.js";

import  {authMiddleware, isAdmin} from "../middlewares/usermiddle.js";




const router = express.Router();
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../uploads/blog'));
      },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});

const uploadImg = multer({storage: storage}).single('image');

router.get('/blog', getAllArticles);

router.post('/blogs', uploadImg,  createArticle);

router.get('/blogs/:id',  getOneArticle);

router.patch('/blogs/:id',authMiddleware, getArticle, isAdmin, modifyArticle);

router.delete('/blogs/:id',authMiddleware, isAdmin, deleteArticle);




 






export default router;
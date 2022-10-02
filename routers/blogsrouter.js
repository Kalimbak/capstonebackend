import express from "express";
import multer from "multer";

// const upload = multer({Dest: '/uploads/'})


import { getAllArticles, createArticle,getOneArticle,modifyArticle,deleteArticle, getArticle} from "../controllers/blogs.js";

import  {authMiddleware, isAdmin} from "../middlewares/usermiddle.js";





const router = express.Router();



const storage = multer.diskStorage({});
const fileFilter = (req, file, cb) => {
  
if (file.mimetype.startsWith('image')) {
  cb(null, true);
} else {
  cb('invalid image file!', false);
}
};
const uploads = multer({ storage, fileFilter });


// const uploadImg = multer({storage: storage}).single('profilePic', fileFilter);
router.get('/blog', getAllArticles);

router.post('/blogs',  uploads.single('image'), createArticle, );

router.get('/blogs/:id',  getOneArticle);

router.patch('/blogs/:id', getArticle,  modifyArticle);

router.delete('/blogs/:id',authMiddleware, isAdmin, deleteArticle);




 






export default router;
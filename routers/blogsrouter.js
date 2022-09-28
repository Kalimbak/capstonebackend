import express from "express";
// import multer from "multer";
// import cloudinary from "../utils/cloudinary.js";
import multer from "multer";
import path from "path";


import { getAllArticles, createArticle,getOneArticle,modifyArticle,deleteArticle, getArticle} from "../controllers/blogs.js";

import  {authMiddleware, isAdmin} from "../middlewares/usermiddle.js";




const router = express.Router();

// const storage = multer.diskStorage({});
// const fileFilter = (req, file, cb) => {
//     if (file.mimetype.startsWith("image")) {
//         cb(null, true);
//     } else {
//         cb("invalid image file!", false);
//     }
// };
// const upload = multer({ storage, fileFilter });





const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads')
  },
  filename: function (req, file, cb) {
    cb(null, new Date().getTime() + path.extname(file.originalname))
  }
})

const fileFilter = (req, file, cb) => {
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    cb(null, true)
  } else {
    cb(new Error('Unsupported files'), false)
  }
}

  
const uploadImg = multer({storage: storage}).single('profilePic', fileFilter);
router.get('/blog', getAllArticles);

router.post('/blogs', uploadImg,  createArticle);

router.get('/blogs/:id',  getOneArticle);

router.patch('/blogs/:id', getArticle,  modifyArticle);

router.delete('/blogs/:id',authMiddleware, isAdmin, deleteArticle);




 






export default router;
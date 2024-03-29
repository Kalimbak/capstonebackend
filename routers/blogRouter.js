import express from 'express';
import {
    getBlogs,
    createBlog,
    getBlog,
    deleteBlog,
    updateBlog
    
  } from '../controllers/blogController.js';
  import multer from 'multer';

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
  
  router
    .route('/article')
    .get(getBlogs)
    .post(uploads.single('image'),createBlog);
  
  router
    .route('/article/:id')
    .get(getBlog)
    .patch(uploads.single('image'),updateBlog)
    .delete(deleteBlog);
  
  export default router;
import express from 'express';
import { upload } from '../middlewares/upload.middleware.js';
import {
  getBlogs,
  createNewBlog,
  getSingleBlog,
  updateExistingBlog,
  deleteExistingBlog
} from '../controllers/blog.controller.js';

const router = express.Router();

router.get('/', getBlogs);
router.get('/:id', getSingleBlog);
router.post('/', upload.single('imagen'), createNewBlog);
router.put('/:id', upload.single('imagen'), updateExistingBlog);
router.delete('/:id', deleteExistingBlog);

export default router;

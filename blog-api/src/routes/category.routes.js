import express from "express";
import { getCategories, getCategory, addCategory, editCategory, removeCategory } from '../controllers/category.controller.js';
import multer from 'multer';

const router = express.Router();
const upload = multer();

router.get('/', getCategories);
router.get('/:id', getCategory);
router.post('/', upload.none(), addCategory);
router.put('/:id', editCategory);
router.delete('/:id', removeCategory);

export default router;
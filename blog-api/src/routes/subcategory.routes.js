import express from 'express';
import { getSubcategories, getSubcategory, addSubcategory, editSubcategory, removeSubcategory } from '../controllers/subcategory.controller.js';
import multer from 'multer';

const router = express.Router();
const upload = multer();
router.get('/', getSubcategories);
router.get('/:id', getSubcategory);
router.post('/', upload.none(), addSubcategory);
router.put('/:id', editSubcategory);
router.delete('/:id', removeSubcategory);

export default router;
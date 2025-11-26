import express from 'express';
import { getSubcategories, getSubcategory, addSubcategory, editSubcategory, removeSubcategory } from '../controllers/subcategory.controller.js';
import multer from 'multer';
import { validateSchema } from '../middlewares/validator.middleware.js';
import { createSubcategorySchema } from '../schemas/subcategory.schema.js';

const router = express.Router();
const upload = multer();
router.get('/', getSubcategories);
router.get('/:id', getSubcategory);
router.post('/', upload.none(),  validateSchema(createSubcategorySchema),addSubcategory);
router.put('/:id', editSubcategory);
router.delete('/:id', removeSubcategory);

export default router;
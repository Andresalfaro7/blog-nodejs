import { z } from 'zod';
import { getCategoryByName } from '../services/category.service.js';

export const createCategorySchema = z.object({
    nombre: z
    .string('El nombre de la categoría es obligatorio')
    .min(3, 'El nombre de la categoría debe tener al menos 3 caracteres')
    .max(50, 'El nombre de la categoría debe tener como máximo 50 caracteres')
})
.superRefine( async (data, ctx) =>{
    const existCatagoryName = await getCategoryByName(data.nombre);
    if(existCatagoryName){
        ctx.addIssue({
            code: "custom",
            path: ["nombre"],
            message: "Ya existe una categoría con ese nombre"
        });
    }
});
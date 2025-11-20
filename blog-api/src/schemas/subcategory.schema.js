import { z } from 'zod';
import { getSubcategoryByName } from '../services/subcategory.service.js';

export const createSubcategorySchema = z.object({
    nombre: z
    .string('El nombre de la subcategoría es obligatorio')
    .min(3, 'El nombre de la subcategoría debe tener al menos 3 caracteres')
    .max(50, 'El nombre de la subcategoría debe tener como máximo 50 caracteres')
})
.superRefine( async (data, ctx) =>{
    const existCatagoryName = await getSubcategoryByName(data.nombre);
    if(existCatagoryName){
        ctx.addIssue({
            code: "custom",
            path: ["nombre"],
            message: "Ya existe una subcategoría con ese nombre"
        });
    }
});
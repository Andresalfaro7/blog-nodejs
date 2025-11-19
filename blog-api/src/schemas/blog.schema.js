import { z } from 'zod';
import { existUser } from '../services/user.service.js';
import { existCategory } from '../services/category.service.js';
import { existSubcategory } from '../services/subcategory.service.js';

export const createBlogSchema = z.object({
    titulo: z
    .string('El título es obligatorio')
    .min(3, 'El título debe tener al menos 3 caracteres'),
    contenido: z
    .string('El contenido es obligatorio')
    .min(150, 'El contenido debe tener al menos 150 caracteres'),
    id_usuario: z
    .coerce
    .number('El usuario es obligatorio')
    .int('El usuario no tiene un formato válido'),
    id_categoria: z
    .coerce
    .number('La categoría es obligatoria')
    .int('La categoría no tiene un formato válido'),
    id_subcategoria: z
    .coerce
    .number('La subcategoría es obligatoria')
    .int('La subcategoría no tiene un formato válido'),
})
.superRefine(async (data, ctx) => {
    const userExists = await existUser(data.id_usuario);
    console.log("userExists", userExists);
    if (!userExists) {
        ctx.addIssue({
            code: "custom",
            message: 'El usuario no existe',
            path: ['id_usuario'],
        });
    }

    const categoryExists = await existCategory(data.id_categoria);
    console.log("categoryExists", categoryExists);
    if (!categoryExists) {
        ctx.addIssue({
            code: "custom",
            message: 'La categoría no existe',
            path: ['id_categoria'],
        });
    }

    const subcategoryExists = await existSubcategory(data.id_subcategoria);
    console.log("subcategoryExists", subcategoryExists);
    if (!subcategoryExists) {
        ctx.addIssue({
            code: "custom",
            message: 'La subcategoría no existe',
            path: ['id_subcategoria'],
        });
    }
});
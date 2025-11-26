import { z } from 'zod';
import { getUserByEmail } from '../services/user.service.js';

export const createUserSchema = z.object({
    nombre: z
        .string('El nombre es obligatorio')
        .min(3, 'El nombre debe tener al menos 3 caracteres'),
    email: z
        .string('El email es obligatorio')
        .email('El email no es válido')
        .min(5, 'El email debe tener al menos 5 caracteres'),
    password: z
        .string('La contraseña es obligatoria')
        .min(6, 'La contraseña debe tener al menos 6 caracteres')
        .max(30, 'La contraseña debe tener como máximo 30 caracteres')
        .regex(/[a-z]/, "Debe contener al menos una letra minúscula.")
        .regex(/[A-Z]/, "Debe contener al menos una letra mayúscula.")  
        .regex(/[0-9]/, "Debe contener al menos un número.")
        .regex(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/, "Debe contener al menos un carácter especial: !,@,#,$,%,^,&,*,(,),_,+,-,=,[,],{,},;,',:,\",\\,|,,.,<,>,/,?"),
    confirmPassword: z
        .string('La confirmación de la contraseña es obligatoria')
})
.superRefine(async (data, ctx) => {
    if (data.password.includes(data.nombre)) {
        ctx.addIssue({
            code: "custom",
            path: ["password"],
            message: 'La contraseña no debe contener el nombre de usuario',
        });
    }

    if (data.password !== data.confirmPassword) {
        ctx.addIssue({
            code: "custom",
            path: ["confirmPassword", "password"],
            message: 'Las contraseñas no coinciden',
        });
    }

    const existingUser = await getUserByEmail(data.email);
    if (existingUser) {
        ctx.addIssue({
            code: "custom",
            path: ["email"],
            message: 'El email ya está registrado',
        });
    }
});
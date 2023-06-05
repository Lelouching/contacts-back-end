import { z } from "zod";

export const userCreateSchema = z.object({
    fullName: z.string().max(50),
    email: z.string().max(60).email(),
    password: z.string().max(50),
    phone: z.string().min(11).max(15),
})

export const userInfoSchema = userCreateSchema.extend({
    id: z.number(),
    createdAt: z.string(),
    updatedAt: z.string(),
    deletedAt: z.string().nullable()
}).omit({ password: true })

export const userUpdateSchema = userCreateSchema.partial()
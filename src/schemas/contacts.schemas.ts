import { z } from "zod";

export const contactCreateSchema = z.object({
    fullName: z.string().max(50),
    email: z.string().max(60).email(),
    phone: z.string().min(11).max(15)
})

export const contactInfoSchema = contactCreateSchema.extend({
    id: z.number(),
    createdAt: z.date(),
    updatedAt: z.date()
})

export const contactUpdateSchema = contactCreateSchema.partial()
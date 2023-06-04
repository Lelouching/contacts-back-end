import { z } from "zod";

export const userCreateSchema = z.object({
    fullName: z.string().max(50),
    email: z.string().max(60).email(),
    password: z.string().max(50),
    phone: z.string().min(11).max(15).or(z.number()),
})

export const userInfoSchema = userCreateSchema.extend({
    createdAt: z.string()
}).omit({ password: true })
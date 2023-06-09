import { z } from "zod";
import { contactInfoSchema } from "./contacts.schemas";

export const userCreateSchema = z.object({
    fullName: z.string().max(50),
    email: z.string().max(60).email(),
    password: z.string().max(50),
    phone: z.string().min(11).max(15),
})

export const userInfoSchema = userCreateSchema.extend({
    id: z.number(),
    createdAt: z.date(),
    updatedAt: z.date(),
    deletedAt: z.date().nullable(),
    contacts: contactInfoSchema.array().nullish()
}).omit({ password: true })

export const userUpdateSchema = userCreateSchema.partial()
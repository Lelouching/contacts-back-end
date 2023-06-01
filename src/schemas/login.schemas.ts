import { z } from "zod";

export const loginSchema = z.object({
    email: z.string().max(60).email(),
    password: z.string().max(50)
})
import { z } from "zod";
import { contactCreateSchema, contactInfoSchema } from "../schemas/contacts.schemas";

export type iContactCreate = z.infer<typeof contactCreateSchema>
export type iContactInfo = z.infer<typeof contactInfoSchema>
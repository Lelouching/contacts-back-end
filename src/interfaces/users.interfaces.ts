import { z } from "zod"
import { userCreateSchema, userInfoSchema } from "../schemas/users.schemas"

export type iUserCreate = z.infer<typeof userCreateSchema>
export type iUserInfo = z.infer<typeof userInfoSchema>
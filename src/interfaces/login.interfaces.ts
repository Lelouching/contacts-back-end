import { z } from "zod"
import { loginSchema } from "../schemas/login.schemas"
import { iUserInfo } from "./users.interfaces"

export type iUserLogin = z.infer<typeof loginSchema>

export interface iUserLoginReturn{
    token: string,
    user: iUserInfo
}
import "dotenv/config"
import { User } from "../../entities/users.entities"
import { AppError } from "../../errors"
import { compare } from "bcryptjs"
import { sign } from "jsonwebtoken"
import { iUserLogin, iUserLoginReturn } from "../../interfaces/login.interfaces"
import { getUserByEmailService } from "../users/getUserByEmail.service"
import { userInfoSchema } from "../../schemas/users.schemas"

export const loginUserService = async (userData: iUserLogin): Promise<iUserLoginReturn> => {
    const user: User | null = await getUserByEmailService(userData.email)

    if(!user){
        throw new AppError("Invalid credentials", 401)
    }

    const comparePassword: boolean = await compare(userData.password, user.password)

    if(!comparePassword){
        throw new AppError("Invalid credentials", 401)
    }

    if(user.deletedAt){
        throw new AppError("user is deleted", 403)
    }

    const token: string = sign(
        {
            email: user.email
        },
        String(process.env.SECRET_KEY),
        {
            expiresIn: process.env.EXPIRES_IN,
            subject: String(user.id)
        }
    )

    return {
        token,
        user: userInfoSchema.parse(user)
    }
}
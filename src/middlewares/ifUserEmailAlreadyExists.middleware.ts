import { NextFunction, Request, Response } from "express";
import { getUserByEmailService } from "../services/users/getUserByEmail.service";
import { User } from "../entities/users.entities";
import { AppError } from "../errors";

export const ifUserEmailAlreadyExistsMiddleware = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
    if(req.method === "PATCH" && !req.body.email) return next()

    const user: User | null = await getUserByEmailService(req.body.email)

    if(user){
        throw new AppError("user email already exists", 409)
    }

    return next()
}
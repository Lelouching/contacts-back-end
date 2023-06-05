import { NextFunction, Request, Response } from "express";
import { iUserInfo } from "../interfaces/users.interfaces";
import { getUserByIdService } from "../services/users/getUserById.service";
import { AppError } from "../errors";

export const ifUserIdExistsMiddleware = async (req: Request, res: Response, next: NextFunction): Promise<void | Response> => {
    const userId: number = Number(req.params.id)

    const user: iUserInfo | null = await getUserByIdService(userId)

    if(!user){
        throw new AppError("user not found", 404)
    }

    return next()
}
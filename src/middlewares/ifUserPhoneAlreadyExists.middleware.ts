import { NextFunction, Request, Response } from "express";
import { User } from "../entities/users.entities";
import { AppError } from "../errors";
import { getUserByPhoneService } from "../services/users/getUserByPhone.service";

export const ifUserPhoneAlreadyExistsMiddleware = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
    if(req.method === "PATCH" && !req.body.phone) return next()

    const user: User | null = await getUserByPhoneService(req.body.phone)

    if(user){
        throw new AppError("user phone already exists", 409)
    }

    return next()
}
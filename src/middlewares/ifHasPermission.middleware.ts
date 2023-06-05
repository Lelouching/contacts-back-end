import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors";

export const ifHasPermissionMiddleware = (req: Request, res: Response, next: NextFunction): void | Response => {
    if(req.userToken.id !== req.userId.id){
        throw new AppError("insufficient permission", 403)
    }

    return next()
}
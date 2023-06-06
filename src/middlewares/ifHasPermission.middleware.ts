import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors";

export const ifHasPermissionMiddleware = (req: Request, res: Response, next: NextFunction): void | Response => {
    if(req.baseUrl === "/users" && req?.userToken?.id !== req?.userId?.id){
        return res.status(403).json({
            message: "insufficient permission"
        })
    }

    if(req.baseUrl === "/contacts" && req?.userToken?.id !== req?.contactId?.user?.id){
        return res.status(403).json({
            message: "insufficient permission"
        })
    }

    return next()
}
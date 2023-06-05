import { NextFunction, Request, Response } from "express";
import { loginUserService } from "../services/login/login.service";
import { iUserLoginReturn } from "../interfaces/login.interfaces";

export const loginUserController = async (req: Request, res: Response, next: NextFunction): Promise<Response> => {
    const user: iUserLoginReturn = await loginUserService(req.body)

    return res.status(200).json(user)
}
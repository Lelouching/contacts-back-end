import { Request, Response } from "express";
import { iUserInfo } from "../interfaces/users.interfaces";
import { createUserService } from "../services/users/createUser.service";
import { deleteUserService } from "../services/users/deleteUser.service";
import { getUserByIdService } from "../services/users/getUserById.service";
import { updateUserService } from "../services/users/updateUser.service";

export const createUserController = async (req: Request, res: Response): Promise<Response> => {
    const user: iUserInfo = await createUserService(req.body)

    return res.status(201).json(user)
}

export const deleteUserController = async (req: Request, res: Response): Promise<Response> => {
    const userId: number = Number(req.params.id)

    await deleteUserService(userId)

    return res.status(204).send()
}

export const getUserController = async (req: Request, res: Response): Promise<Response> => {
    const user: iUserInfo = req.userId

    return res.status(200).json(user)
}

export const updateUserController = async (req: Request, res: Response): Promise<Response> => {
    const user: iUserInfo = await updateUserService(req.userId, req.body)

    return res.status(200).json(user)
}
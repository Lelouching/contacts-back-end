import { Router } from "express";
import { createUserController } from "../controllers/users.controllers";
import { validateBodyMiddleware } from "../middlewares/validateBody.middleware";
import { userCreateSchema } from "../schemas/users.schemas";
import { ifUserEmailAlreadyExistsMiddleware } from "../middlewares/ifUserEmailAlreadyExists.middleware";
import { ifUserPhoneAlreadyExistsMiddleware } from "../middlewares/ifUserPhoneAlreadyExists.middleware";

export const usersRoutes: Router = Router()

usersRoutes.post("", validateBodyMiddleware(userCreateSchema), ifUserEmailAlreadyExistsMiddleware, ifUserPhoneAlreadyExistsMiddleware, createUserController)
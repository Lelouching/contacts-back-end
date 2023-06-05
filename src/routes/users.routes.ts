import { Router } from "express";
import { createUserController, deleteUserController } from "../controllers/users.controllers";
import { validateBodyMiddleware } from "../middlewares/validateBody.middleware";
import { userCreateSchema } from "../schemas/users.schemas";
import { ifUserEmailAlreadyExistsMiddleware } from "../middlewares/ifUserEmailAlreadyExists.middleware";
import { ifUserPhoneAlreadyExistsMiddleware } from "../middlewares/ifUserPhoneAlreadyExists.middleware";
import { validateTokenMiddleware } from "../middlewares/validateToken.middleware";
import { ifHasPermissionMiddleware } from "../middlewares/ifHasPermission.middleware";
import { ifUserIdExistsMiddleware } from "../middlewares/ifUserIdExists.middleware";

export const usersRoutes: Router = Router()

usersRoutes.post("", validateBodyMiddleware(userCreateSchema), ifUserEmailAlreadyExistsMiddleware, ifUserPhoneAlreadyExistsMiddleware, createUserController)
usersRoutes.delete("/:id", validateTokenMiddleware, ifUserIdExistsMiddleware, ifHasPermissionMiddleware, deleteUserController)
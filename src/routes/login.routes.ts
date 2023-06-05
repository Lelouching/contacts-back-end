import { validateBodyMiddleware } from "./../middlewares/validateBody.middleware"
import { Router } from "express";
import { loginUserController } from "../controllers/login.controllers";
import { loginSchema } from "../schemas/login.schemas";

export const loginRouter: Router = Router()

loginRouter.post("", validateBodyMiddleware(loginSchema), loginUserController)
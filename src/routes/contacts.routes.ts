import { Router } from "express";
import { validateBodyMiddleware } from "../middlewares/validateBody.middleware";
import { contactCreateSchema, contactUpdateSchema } from "../schemas/contacts.schemas";
import { validateTokenMiddleware } from "../middlewares/validateToken.middleware";
import { createContactController, deleteContactController, updateContactController } from "../controllers/contacts.controllers";
import { ifContactIdExistsMiddleware } from "../middlewares/ifContactIdExists.middleware";
import { ifHasPermissionMiddleware } from "../middlewares/ifHasPermission.middleware";

export const contactsRouter: Router = Router()

contactsRouter.post("", validateBodyMiddleware(contactCreateSchema), validateTokenMiddleware, createContactController)
contactsRouter.delete("/:id", validateTokenMiddleware, ifContactIdExistsMiddleware, ifHasPermissionMiddleware, deleteContactController)
contactsRouter.patch("/:id", validateBodyMiddleware(contactUpdateSchema), validateTokenMiddleware, ifContactIdExistsMiddleware,
ifHasPermissionMiddleware, updateContactController)
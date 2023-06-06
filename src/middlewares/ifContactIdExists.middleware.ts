import { NextFunction, Request, Response } from "express";
import { Contact } from "../entities/contacts.entities";
import { getContactByIdService } from "../services/contacts/getContactById.service";

export const ifContactIdExistsMiddleware = async (req: Request, res: Response, next: NextFunction): Promise<void | Response> => {
    const contactId: number = Number(req.params.id)

    const contact: Contact | null = await getContactByIdService(contactId)

    if(!contact){
        return res.status(404).json({
            message: "contact not found"
        })
    }

    req.contactId = contact

    return next()
}
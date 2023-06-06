import { Request, Response } from "express";
import { createContactService } from "../services/contacts/createContact.service";
import { iContactInfo } from "../interfaces/contacts.interfaces";
import { deleteContactService } from "../services/contacts/deleteContact.service";
import { updateContactService } from "../services/contacts/updateContact.service";

export const createContactController = async (req: Request, res: Response): Promise<Response> => {
    const userId: number = req.userToken.id

    const contact: iContactInfo = await createContactService(req.body, userId)

    return res.status(201).json(contact)
}

export const deleteContactController = async (req: Request, res: Response): Promise<Response> => {
    const contactId: number = Number(req.params.id)

    await deleteContactService(contactId)

    return res.status(204).json()
}

export const updateContactController = async (req: Request, res: Response): Promise<Response> => {
    const contactId: number = Number(req.params.id)

    const contact: iContactInfo = await updateContactService(req.contactId, req.body)

    return res.status(200).json(contact)
}
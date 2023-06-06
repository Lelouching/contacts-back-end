import { Repository } from "typeorm";
import { Contact } from "../../entities/contacts.entities";
import { AppDataSource } from "../../data-source";
import { contactInfoSchema } from "../../schemas/contacts.schemas";
import { iContactInfo } from "../../interfaces/contacts.interfaces";

export const updateContactService = async (contactData: Contact, contactRequest: any): Promise<iContactInfo> => {
    const contactRepo: Repository<Contact> = AppDataSource.getRepository(Contact)

    const contact: Contact = {...contactData, ...contactRequest}

    await contactRepo.save(contact)

    return contactInfoSchema.parse(contact)
}
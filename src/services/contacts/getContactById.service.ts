import { Repository } from "typeorm"
import { Contact } from "../../entities/contacts.entities"
import { AppDataSource } from "../../data-source"

export const getContactByIdService = async (contactId: number): Promise<Contact | null> => {
    const contactRepo: Repository<Contact> = AppDataSource.getRepository(Contact)

    const contact: Contact | null = await contactRepo.findOne({
        where: {
            id: contactId
        },
        relations: {
            user: true
        }
    })

    return contact
}
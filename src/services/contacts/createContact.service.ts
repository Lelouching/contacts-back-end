import { Repository } from "typeorm";
import { Contact } from "../../entities/contacts.entities";
import { User } from "../../entities/users.entities";
import { iContactCreate, iContactInfo } from "../../interfaces/contacts.interfaces";
import { AppDataSource } from "../../data-source";
import { AppError } from "../../errors";
import { contactInfoSchema } from "../../schemas/contacts.schemas";

export const createContactService = async (contactData: iContactCreate, userId: number): Promise<iContactInfo> => {
    const userRepo: Repository<User> = AppDataSource.getRepository(User)

    const user: User | null = await userRepo.findOneBy({
        id: userId
    })

    if(!user){
        throw new AppError("user not found", 404)
    }

    const contactRepo: Repository<Contact> = AppDataSource.getRepository(Contact)

    let contact: Contact = contactRepo.create({...contactData, user: user})

    await contactRepo.save(contact)

    return contactInfoSchema.parse(contact)
}
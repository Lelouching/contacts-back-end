import { Contact } from "../../entities/contacts.entities"
import { iUserInfo } from "../../interfaces/users.interfaces"

declare global{
    namespace Express{
        interface Request{
            userToken: {
                id: number,
                email: string
            },
            userId: iUserInfo,
            contactId: Contact
        }
    }
}
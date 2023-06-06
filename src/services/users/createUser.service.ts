import { Repository } from "typeorm";
import { iUserCreate, iUserInfo } from "../../interfaces/users.interfaces";
import { User } from "../../entities/users.entities";
import { AppDataSource } from "../../data-source";
import { userInfoSchema } from "../../schemas/users.schemas";

export const createUserService = async (userData: iUserCreate): Promise<iUserInfo> => {
    const userRepo: Repository<User> = AppDataSource.getRepository(User)

    const user: User = userRepo.create(userData)

    await userRepo.save(user)

    return userInfoSchema.parse({...user, contacts: []})
}
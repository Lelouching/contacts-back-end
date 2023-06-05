import { Repository } from "typeorm";
import { iUserInfo } from "../../interfaces/users.interfaces";
import { User } from "../../entities/users.entities";
import { AppDataSource } from "../../data-source";
import { userInfoSchema } from "../../schemas/users.schemas";

export const updateUserService = async (userData: iUserInfo, userRequest: any): Promise<iUserInfo> => {
    const userRepo: Repository<User> = AppDataSource.getRepository(User)

    const user: User = await userRepo.save({...userData, ...userRequest})

    return userInfoSchema.parse(user)
}
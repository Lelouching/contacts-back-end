import { Repository } from "typeorm";
import { User } from "../../entities/users.entities";
import { AppDataSource } from "../../data-source";

export const getUserByPhoneService = async (userPhone: string): Promise<User | null> => {
    const userRepo: Repository<User> = AppDataSource.getRepository(User)

    const user: User | null = await userRepo.findOne({
        where: {
            phone: userPhone
        },
        withDeleted: true
    })

    return user
}
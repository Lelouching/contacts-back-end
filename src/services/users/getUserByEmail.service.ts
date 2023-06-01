import { Repository } from "typeorm"
import { User } from "../../entities/users.entities"
import { AppDataSource } from "../../data-source"

export const getUserByEmailService = async (email: string): Promise<User | null> => {
    const userRepo: Repository<User> = AppDataSource.getRepository(User)

    const user: User | null = await userRepo.createQueryBuilder().
    where("LOWER(email) = :email", { email: email.toLowerCase() }).
    withDeleted().
    getOne()

    return user
}
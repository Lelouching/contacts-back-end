import { Repository } from "typeorm";
import { iUserInfo } from "../../interfaces/users.interfaces";
import { User } from "../../entities/users.entities";
import { AppDataSource } from "../../data-source";
import { userInfoSchema } from "../../schemas/users.schemas";
import { getRounds, hashSync } from "bcryptjs";

export const updateUserService = async (userData: iUserInfo, userRequest: any): Promise<iUserInfo> => {
    const userRepo: Repository<User> = AppDataSource.getRepository(User)

    const user: User | null = await userRepo.findOneBy({
        id: userData.id
    })

    let userPatched: User = await userRepo.save({...user, ...userRequest})

    const rounds: Number = getRounds(userPatched.password)

    if(!rounds){
        userPatched.password = hashSync(userPatched.password, 10)
        await userRepo.save(userPatched)
    }

    return userInfoSchema.parse(userPatched)
}
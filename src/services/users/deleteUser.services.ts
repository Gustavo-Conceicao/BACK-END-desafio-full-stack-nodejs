import { Repository } from "typeorm"
import { AppDataSource } from "../../data-source"
import { AppError } from "../../errors"
import User from "../../entities/user.entities"

const deleteUserService = async (idUser: number):Promise<void> => {
    const userRepo: Repository<User> = AppDataSource.getRepository(User)

    const user: User | null = await userRepo.findOneBy({id: idUser})

    if(!user?.id){
        throw new AppError("User not found", 404)
    }

    await userRepo.softRemove(user!)
}

export default deleteUserService
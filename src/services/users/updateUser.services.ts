import { Repository } from "typeorm";
import {
  TUpdateUserRequest,
  TUserResponse,
} from "../../interfaces/users.interfaces";
import { AppDataSource } from "../../data-source";
import { userSchema } from "../../schemas/users.schemas";
import User from "../../entities/user.entities";

const updateUserService = async (
  data: TUpdateUserRequest,
  idUser: number
): Promise<TUserResponse> => {
  const userRepo: Repository<User> = AppDataSource.getRepository(User);

  const oldData: User | null = await userRepo.findOneBy({ id: idUser });

  const updateUserData: User = userRepo.create({
    ...oldData,
    ...data,
  });
  await userRepo.save(updateUserData);

  const update: TUserResponse = userSchema.parse(updateUserData);

  return update;
};

export default updateUserService;

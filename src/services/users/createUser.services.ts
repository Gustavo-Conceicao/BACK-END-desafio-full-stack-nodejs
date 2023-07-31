import { Repository } from "typeorm";
import { TUserRequest, TUserResponse } from "../../interfaces/users.interfaces";
import { AppDataSource } from "../../data-source";
import { userSchema } from "../../schemas/users.schemas";
import User from "../../entities/user.entities";

const createUserService = async (
  data: TUserRequest
): Promise<TUserResponse> => {
  const userRepo: Repository<User> = AppDataSource.getRepository(User);

  const user: User = userRepo.create(data);
  await userRepo.save(user);

  return userSchema.parse(user);
};

export default createUserService;

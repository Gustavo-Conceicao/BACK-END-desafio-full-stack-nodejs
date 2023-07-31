import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { TUsersResponse } from "../../interfaces/users.interfaces";
import { usersSchemaResponse } from "../../schemas/users.schemas";
import User from "../../entities/user.entities";

const listAllUsersService = async (): Promise<TUsersResponse> => {
  const userRepo: Repository<User> = AppDataSource.getRepository(User);

  const users: User[] = await userRepo.createQueryBuilder().getMany();

  return usersSchemaResponse.parse(users);
};

export default listAllUsersService;

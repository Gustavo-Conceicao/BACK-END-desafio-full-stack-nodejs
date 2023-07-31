import { Request, Response } from "express";
import { TUserRequest } from "../../interfaces/users.interfaces";
import createUserService from "../../services/users/createUser.services";

const createUserController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const data: TUserRequest = request.body;

  const newUser = await createUserService(data);

  return response.status(201).json(newUser);
};

export default createUserController;

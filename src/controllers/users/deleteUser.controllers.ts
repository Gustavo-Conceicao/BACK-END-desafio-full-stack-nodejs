import { Request, Response } from "express";
import deleteUserService from "../../services/users/deleteUser.services";

const deleteUserController = async (
  request: Request,
  response: Response
): Promise<any> => {
  const idUser: number = parseInt(request.params.id);

  await deleteUserService(idUser);

  return response.status(204).send();
};

export default deleteUserController;

import { Request, Response } from "express";
import deleteContactService from "../../services/contacts/deleteContact.services";

const deleteContactController = async (
  request: Request,
  response: Response
): Promise<any> => {
  const idUser: number = parseInt(request.params.id);

  await deleteContactService(idUser);

  return response.status(204).send();
};

export default deleteContactController;

import { Request, Response } from "express";
import { TUserRequest } from "../../interfaces/users.interfaces";
import createContactService from "../../services/contacts/createContact.services";

const createContactController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const data: TUserRequest = request.body;

  const newContact = await createContactService(data);

  return response.status(201).json(newContact);
};

export default createContactController;

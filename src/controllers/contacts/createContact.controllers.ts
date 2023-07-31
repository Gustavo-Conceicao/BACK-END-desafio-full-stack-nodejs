import { Request, Response } from "express";
import createContactService from "../../services/contacts/createContact.services";
import { TContactRequest } from "../../interfaces/contacts.interfaces";

const createContactController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const data: TContactRequest = request.body;

  const newContact = await createContactService(data);

  return response.status(201).json(newContact);
};

export default createContactController;

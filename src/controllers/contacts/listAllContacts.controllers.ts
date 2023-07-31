import { Request, Response } from "express";
import listAllContactsService from "../../services/contacts/listAllContacts.services";
import { TContactsResponse } from "../../interfaces/contacts.interfaces";

const listAllContactsController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const contacts: TContactsResponse = await listAllContactsService();
  return response.status(200).json(contacts);
};

export default listAllContactsController;

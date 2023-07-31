import { Request, Response } from "express";
import { TUsersResponse } from "../../interfaces/users.interfaces";
import listAllUsersService from "../../services/users/listAllUsers.services";
import listAllContactsService from "../../services/contacts/listAllContacts.services";

const listAllContactsController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const contacts: TUsersResponse = await listAllContactsService();
  return response.status(200).json(contacts);
};

export default listAllContactsController;

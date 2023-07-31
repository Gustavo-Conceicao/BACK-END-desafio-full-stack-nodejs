import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import Contact from "../../entities/contact.entities";
import { contactsSchemaResponse } from "../../schemas/contacts.schemas";
import { TContactsResponse } from "../../interfaces/contacts.interfaces";

const listAllContactsService = async (): Promise<TContactsResponse> => {
  const contactRepo: Repository<Contact> = AppDataSource.getRepository(Contact);

  const contacts: Contact[] = await contactRepo.createQueryBuilder().getMany();

  return contactsSchemaResponse.parse(contacts);
};

export default listAllContactsService;

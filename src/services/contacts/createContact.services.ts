import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import Contact from "../../entities/contact.entities";
import { contactSchema } from "../../schemas/contacts.schemas";
import {
  TContactRequest,
  TContactResponse,
} from "../../interfaces/contacts.interfaces";

const createContactService = async (
  data: TContactRequest
): Promise<TContactResponse> => {
  const contactRepo: Repository<Contact> = AppDataSource.getRepository(Contact);

  const contact: Contact = contactRepo.create(data);
  await contactRepo.save(contact);

  return contactSchema.parse(contact);
};

export default createContactService;

import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import Contact from "../../entities/contact.entities";
import { contactSchema } from "../../schemas/contacts.schemas";
import {
  TContactResponse,
  TUpdateContactRequest,
} from "../../interfaces/contacts.interfaces";

const updateContactService = async (
  data: TUpdateContactRequest,
  idUser: number
): Promise<TContactResponse> => {
  const contactRepo: Repository<Contact> = AppDataSource.getRepository(Contact);

  const oldData: Contact | null = await contactRepo.findOneBy({ id: idUser });

  const updateContactData: Contact = contactRepo.create({
    ...oldData,
    ...data,
  });
  await contactRepo.save(updateContactData);

  const update: TContactResponse = contactSchema.parse(updateContactData);

  return update;
};

export default updateContactService;

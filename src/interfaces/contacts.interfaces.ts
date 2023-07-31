import { z } from "zod";
import { DeepPartial } from "typeorm";
import {
  contactSchema,
  contactSchemaRequest,
  contactsSchemaResponse,
  updateContactSchemaRequest,
} from "../schemas/contacts.schemas";

type TContactRequest = z.infer<typeof contactSchemaRequest>;
type TContactResponse = z.infer<typeof contactSchema>;
type TContactsResponse = z.infer<typeof contactsSchemaResponse>;
type TUpdateContactRequest = DeepPartial<typeof updateContactSchemaRequest>;

export {
  TContactRequest,
  TContactResponse,
  TContactsResponse,
  TUpdateContactRequest,
};

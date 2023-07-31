import { z } from "zod";

const contactSchema = z.object({
  id: z.number(),
  name: z.string().max(45),
  email: z.string().email().max(45),
  telephone: z.string().max(15),
  createdAt: z.string().nullish(),
});

const contactSchemaRequest = contactSchema.omit({
  id: true,
  createdAt: true,
});

const contactsSchemaResponse = z.array(contactSchema);

const updateContactSchemaRequest = contactSchema
  .omit({ id: true, createdAt: true })
  .partial();

export { contactSchema, contactSchemaRequest, contactsSchemaResponse, updateContactSchemaRequest };

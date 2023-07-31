import { z } from "zod";

const userSchema = z.object({
  id: z.number(),
  name: z.string().max(45),
  email: z.string().email().max(45),
  telephone: z.string().max(15),
  createdAt: z.string().nullish(),
});

const userSchemaRequest = userSchema.omit({
  id: true,
  createdAt: true,
});

const usersSchemaResponse = z.array(userSchema);

const updateUserSchemaRequest = userSchema
  .omit({ id: true, createdAt: true })
  .partial();

export { userSchema, userSchemaRequest, usersSchemaResponse, updateUserSchemaRequest };

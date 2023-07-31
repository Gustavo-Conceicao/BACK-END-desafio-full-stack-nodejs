import { z } from "zod"
import { userSchemaRequest, userSchema, usersSchemaResponse, updateSchemaRequest } from "../schemas/users.schemas"
import { DeepPartial } from "typeorm"

type TUserRequest = z.infer<typeof userSchemaRequest>
type TUserResponse = z.infer<typeof userSchema>
type TUsersResponse = z.infer<typeof usersSchemaResponse>
type TUpdateUserRequest = DeepPartial<typeof updateSchemaRequest>

export {
    TUserRequest,
    TUserResponse,
    TUsersResponse,
    TUpdateUserRequest
}
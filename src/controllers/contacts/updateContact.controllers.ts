import { Request, Response } from "express"
import { TUpdateUserRequest } from "../../interfaces/users.interfaces"
import updateContactService from "../../services/contacts/updateContact.services"

const updateContactController = async (request: Request, response: Response): Promise<Response> => {

    const data: TUpdateUserRequest = request.body
    const idUser: number = parseInt(request.params.id)

    const updateContact = await updateContactService(data, idUser)

    return response.status(200).json(updateContact)
}

export default updateContactController
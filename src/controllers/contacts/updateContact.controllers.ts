import { Request, Response } from "express"
import updateContactService from "../../services/contacts/updateContact.services"
import { TUpdateContactRequest } from "../../interfaces/contacts.interfaces"

const updateContactController = async (request: Request, response: Response): Promise<Response> => {

    const data: TUpdateContactRequest = request.body
    const idUser: number = parseInt(request.params.id)

    const updateContact = await updateContactService(data, idUser)

    return response.status(200).json(updateContact)
}

export default updateContactController
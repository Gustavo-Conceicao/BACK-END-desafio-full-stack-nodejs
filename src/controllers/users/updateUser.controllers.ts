import { Request, Response } from "express"
import { TUpdateUserRequest } from "../../interfaces/users.interfaces"
import updateUserService from "../../services/users/updateUser.services"

const updateUserController = async (request: Request, response: Response): Promise<Response> => {

    const data: TUpdateUserRequest = request.body
    const idUser: number = parseInt(request.params.id)

    const updateUser = await updateUserService(data, idUser)

    return response.status(200).json(updateUser)
}

export default updateUserController
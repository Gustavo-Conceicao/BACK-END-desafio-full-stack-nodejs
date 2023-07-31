import { Request, Response } from "express";
import { TUsersResponse } from "../../interfaces/users.interfaces";
import listAllUsersService from "../../services/users/listAllUsers.services";

const listAllUsersController = async (request: Request, response: Response): Promise<Response> => {
    const users: TUsersResponse = await listAllUsersService()
    return response.status(200).json(users)
}

export default listAllUsersController
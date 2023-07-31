import { Router } from "express";
import createUserController from "../controllers/users/createUser.controllers";
import listAllUsersController from "../controllers/users/listAllUsers.controllers";
import updateUserController from "../controllers/users/updateUser.controllers";
import deleteUserController from "../controllers/users/deleteUser.controllers";

const userRouter: Router = Router();

userRouter.post("", createUserController);
userRouter.get("", listAllUsersController);
userRouter.patch("/:id", updateUserController);
userRouter.delete("/:id", deleteUserController);

export default userRouter;

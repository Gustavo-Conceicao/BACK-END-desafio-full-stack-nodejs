import { Router } from "express";
import createContactController from "../controllers/contacts/createContact.controllers";
import listAllContactsController from "../controllers/contacts/listAllContacts.controllers";
import updateContactController from "../controllers/contacts/updateContact.controllers";
import deleteContactController from "../controllers/contacts/deleteContact.controllers";

const contactRouter: Router = Router();

contactRouter.post("", createContactController);
contactRouter.get("", listAllContactsController);
contactRouter.patch("/:id", updateContactController);
contactRouter.delete("/:id", deleteContactController);

export default contactRouter;

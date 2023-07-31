import { Repository } from "typeorm"
import { AppDataSource } from "../../data-source"
import { AppError } from "../../errors"
import Contact from "../../entities/contact.entities"

const deleteContactService = async (idUser: number):Promise<void> => {
    const contactRepo: Repository<Contact> = AppDataSource.getRepository(Contact)

    const contact: Contact | null = await contactRepo.findOneBy({id: idUser})

    if(!contact?.id){
        throw new AppError("Contact not found", 404)
    }

    await contactRepo.softRemove(contact!)
}

export default deleteContactService
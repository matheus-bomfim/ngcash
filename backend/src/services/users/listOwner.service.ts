import { User } from "../../entities/user.entity";
import { AppDataSource } from "../../data-source";
import { IOwner } from "../../interface/user.inteface";
const listOwnerService = async({id}:IOwner) => {
    const userRepository = AppDataSource.getRepository(User)

    const listOwner = await userRepository.findOneBy({
        id:id
    })

    return listOwner
}

export default listOwnerService
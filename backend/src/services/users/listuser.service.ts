import { User } from "../../entities/user.entity";
import { AppDataSource } from "../../data-source";

const listUserService = async() => {
    const userRepository = AppDataSource.getRepository(User)

    const listUser = await userRepository.find()

    return listUser
}

export default listUserService
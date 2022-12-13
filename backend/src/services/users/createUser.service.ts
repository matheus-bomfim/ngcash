import { User } from "../../entities/user.entity";
import { AppDataSource } from "../../data-source";
import { IUserRequest } from "../../interface/user.inteface";
import { Account } from "../../entities/account.entity";
import bcrypt from "bcryptjs"
import { IAccountRequest } from "../../interface/account.interface";
const createUserService = async ({
    username,
    password
}:IUserRequest) => {
    const userRepository = AppDataSource.getRepository(User)
    const verifyExists = await userRepository.findOneBy({username:username})

    if(verifyExists){
        throw new Error("Username Já Existente")
    }
    
    const dataAccount:IAccountRequest = {balance:100}
    const accountRepository = AppDataSource.getRepository(Account)

    const hashPassword = bcrypt.hashSync(password, 10)
    const createAccount = accountRepository.create(dataAccount)
    
    const createUser = userRepository.create({username,password:hashPassword,account:createAccount})
    

    await accountRepository.save(createAccount)
    await userRepository.save(createUser)
    
    return createUser
}

export default createUserService
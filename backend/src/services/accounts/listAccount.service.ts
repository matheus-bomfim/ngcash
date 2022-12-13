import { Account } from "../../entities/account.entity";
import { AppDataSource } from "../../data-source";
import { IAccountOwner } from "../../interface/account.interface";
import { User } from "../../entities/user.entity";

const listAccountService = async ({id}:IAccountOwner) => {
    const userRepository = AppDataSource.getRepository(User)
    const accountRepository = AppDataSource.getRepository(Account)
    const findUser = await userRepository.findOneBy({
        id:id
    })
    const findAccount = await accountRepository.findOneBy({
        id:findUser!.account.id
    })

    if(!findAccount){
        throw new Error("Conta Bancaria Inexistente")
    }

    return findAccount
}

export default listAccountService

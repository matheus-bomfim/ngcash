import { Account } from "../../entities/account.entity";
import { AppDataSource } from "../../data-source";
import { Transaction } from "../../entities/transaction.entity";
import { ITransactionRequest } from "../../interface/transaction.interface";
import { User } from "../../entities/user.entity";
const transactionsService = async({debitedAccount,creditedAccount,value}:ITransactionRequest) => {
    
    const accountRepository = AppDataSource.getRepository(Account)
    const transactionRepository = AppDataSource.getRepository(Transaction)
    const userRepository = AppDataSource.getRepository(User)
    
    
    const findUserDebitedAccount = await userRepository.findOneBy({
        username:debitedAccount
    })
    const findAccountDebited = await accountRepository.findOneBy({
    id:findUserDebitedAccount?.account.id
    })
    
    
    const findUserCreditedAccount = await userRepository.findOneBy({
        username:creditedAccount
    })

    if(!findUserCreditedAccount){
        throw new Error("Conta de Transferência Não Encontrada")
    }
    
    const findAccountCredited = await accountRepository.findOneBy({
        id:findUserCreditedAccount?.account.id
    })

    if(findAccountDebited!.balance < value){
        throw new Error("Saldo Insuficiente")
    }

    if(findUserCreditedAccount?.id === findUserDebitedAccount?.id){
        throw new Error("Transferência da Mesma Conta é Proibido")
    }

    if(value <= 0){
        throw new Error("Valor Mínimo é R$1")
    } 

    const debitedValue = findAccountDebited!.balance - Number(value)
    const creditedValue = findAccountCredited!.balance + Number(value)

    const createTransaction = transactionRepository.create({
        debitedAccount:findAccountDebited?.id,
        creditedAccount:findAccountCredited?.id,
        value:value,
    })

    transactionRepository.save(createTransaction)
    
    accountRepository.update(findAccountDebited!,{
        balance:debitedValue
    })
    
    accountRepository.update(findAccountCredited!,{
        balance:creditedValue
    })

    return createTransaction
}

export default transactionsService
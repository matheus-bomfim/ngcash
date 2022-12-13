import { AppDataSource } from "../../data-source";
import { Transaction } from "../../entities/transaction.entity";
import { User } from "../../entities/user.entity";
import { ITransactionList } from "../../interface/transaction.interface";

const listTransactionsService = async({id}:ITransactionList) => {
    const userRepository = AppDataSource.getRepository(User)
    
    const user = await userRepository.findOneBy({
        id:id
    })
    
    const transactionRepository = AppDataSource.getRepository(Transaction)

    const transactions = await transactionRepository.find()

    const userTransactions = transactions.filter((transaction)=>{
        return Object(transaction.debitedAccount).id === user?.account.id || Object(transaction.creditedAccount).id === user?.account.id
    })
    
    if(userTransactions.length < 0){
        return ["Nenhuma Transferência Realizada"]
    }
    
    return userTransactions
}

export default listTransactionsService
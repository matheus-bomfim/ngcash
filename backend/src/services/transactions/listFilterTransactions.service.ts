import { AppDataSource } from "../../data-source";
import { Transaction } from "../../entities/transaction.entity";
import { User } from "../../entities/user.entity";
import { ITransactionListFilter } from "../../interface/transaction.interface";

const listFilterTransactionsService = async({id,type}:ITransactionListFilter) => {
    const userRepository = AppDataSource.getRepository(User)
    
    const user = await userRepository.findOneBy({
        id:id
    })
    
    const transactionRepository = AppDataSource.getRepository(Transaction)
    const transactions = await transactionRepository.find()
    
    
    const userTransactions = transactions.filter((transaction)=>{
        if(type === "cashin"){
            return Object(transaction.creditedAccount).id === user?.account.id
        }
        else if(type === "cashout"){
            return Object(transaction.debitedAccount).id === user?.account.id
        }
        else{
            const dateCreated = `${transaction.created_at.getFullYear()}-${transaction.created_at.getMonth() + 1}-${transaction.created_at.getDate()}`
            return dateCreated === type 
        }

    })
    
    if(userTransactions.length < 0){
        return ["Nenhuma Transferência Realizada"]
    }
    
    return userTransactions
}

export default listFilterTransactionsService
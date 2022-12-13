export interface ITransactionRequest{
    debitedAccount: string
    creditedAccount: string
    value:number
}

export interface ITransactionSchema{
    creditedAccount: String
    value:number
}

export interface ITransactionList{
    id:string
}
export interface ITransactionListFilter{
    id:string,
    type:string
}
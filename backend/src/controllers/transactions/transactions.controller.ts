import {Request,Response} from "express"
import jwt from "jsonwebtoken"
import transactionsService from "../../services/transactions/transactions.service"

const transactionController = async(req:Request,res:Response) => {
    try {
        const {creditedAccount,value} = req.body
        const token = String(req.headers.authorization)
        const decode = Object(jwt.decode(token))
        const debitedAccount = decode.username
        
        const create = await transactionsService({debitedAccount,creditedAccount,value})
        
        return res.status(201).json(create)
    } catch (err) {
        if(err instanceof Error)
            return res.status(400).json(err.message)
    }
}

export default transactionController
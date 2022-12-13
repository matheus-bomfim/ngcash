import {Request,Response} from "express"
import jwt from "jsonwebtoken"
import listFilterTransactionsService from "../../services/transactions/listFilterTransactions.service"
const listFilterTransactionsController = async (req:Request,res:Response) => {
    try {
        const type = req.params.type
        
        const reg = /^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/
        const regValidate = reg.test(type)
        if(!regValidate && type !== "cashin"  && type !== "cashout" ){
            return res.status(500).send("Format Invalid")
        }
        
        const token = String(req.headers.authorization)
        const decode = Object(jwt.decode(token))
        const id = decode.id
        
        const list = await listFilterTransactionsService({id,type})
        return res.status(200).json(list)
    } catch (err) {
        if(err instanceof Error)
            return res.status(400).json(err.message)
    }
}
export default listFilterTransactionsController
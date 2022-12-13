import {Request,Response} from "express"
import jwt from "jsonwebtoken"
import listTransactionsService from "../../services/transactions/listTranscations.service"
const listTransactionsController = async (req:Request,res:Response) => {
    try {
        const token = String(req.headers.authorization)
        const decode = Object(jwt.decode(token))
        const id = decode.id
        const list = await listTransactionsService({id})
        return res.status(200).json(list)
    } catch (err) {
        if(err instanceof Error)
            return res.status(400).json(err.message)
    }
}
export default listTransactionsController
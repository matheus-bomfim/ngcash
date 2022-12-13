import {Request,Response} from "express"
import jwt from "jsonwebtoken"
import listAccountService from "../../services/accounts/listAccount.service"
const listAccountController = async (req:Request,res:Response) => {
    try {
        const token = String(req.headers.authorization)
        const decode = Object(jwt.decode(token))
        const id = decode.id
        
        const account = await listAccountService({id})
        return res.status(200).json(account)
    } catch (err) {
        if(err instanceof Error)
        return res.status(400).json(err.message)
    }
}

export default listAccountController
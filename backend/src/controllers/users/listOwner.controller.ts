import {Request,Response} from "express"
import { instanceToPlain } from "class-transformer";
import jwt from "jsonwebtoken"
import listOwnerService from "../../services/users/listOwner.service";
const listOwnerController = async (req:Request,res:Response) => {
    try {
        const token = String(req.headers.authorization)
        const decode = Object(jwt.decode(token))
        const id = decode.id

        const user = await listOwnerService({id})
        return res.status(201).json(instanceToPlain(user))
    } catch (err) {
        if(err instanceof Error)
            return res.status(400).json(err.message)
    }
}

export default listOwnerController
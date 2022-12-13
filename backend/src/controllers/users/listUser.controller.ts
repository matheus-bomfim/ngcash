import {Request,Response} from "express"
import listUserService from "../../services/users/listuser.service"
import { instanceToPlain } from "class-transformer"
const listUserController = async (req:Request,res:Response) => {
    try {
        const list = await listUserService()
        return res.status(201).json(instanceToPlain(list))
    } catch (err) {
        if(err instanceof Error)
            return res.status(400).json(err.message)
    }
}
export default listUserController
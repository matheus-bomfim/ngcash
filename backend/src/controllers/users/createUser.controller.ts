import createUserService from "../../services/users/createUser.service";
import {Request,Response} from "express"
import { instanceToPlain } from "class-transformer";

const createUserController = async (req:Request,res:Response) => {
    try {
        const {username,password} = req.body
    
        const user = await createUserService({username,password})
        return res.status(201).json(instanceToPlain(user))
    } catch (err) {
        if(err instanceof Error)
            return res.status(400).json(err.message)
    }
}

export default createUserController
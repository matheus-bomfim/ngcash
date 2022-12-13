import LoginService from "../../services/users/Login.service";
import {Request,Response} from "express"

const LoginController = async(req:Request,res:Response) => {
    try {
        const {username,password} = req.body
        const login = await LoginService({username,password})
        return res.status(201).json(login)
    } catch (err) {
        if(err instanceof Error)
            return res.status(400).json(err.message)
    }
}

export default LoginController
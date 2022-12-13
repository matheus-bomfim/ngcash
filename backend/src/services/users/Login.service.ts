import { User } from "../../entities/user.entity";
import { AppDataSource } from "../../data-source";
import { IUserLogin } from "../../interface/user.inteface";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
const LoginService = async({username,password}:IUserLogin) => {

    const userRepository = AppDataSource.getRepository(User)

    const user = await userRepository.findOneBy({
        username:username
    })

    const verifyPassword = bcrypt.compareSync(password,String(user!?.password))

    if(!verifyPassword || !user){
        throw new Error("Username ou Senha Incorretos")
    }
    
    const token = jwt.sign({id:user?.id,username:user?.username},String(process.env.JWT_SECRET),{expiresIn:"24h"})
    
    return {token:token}
}

export default LoginService
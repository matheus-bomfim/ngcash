import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken"
const authenticationMiddleware = 
async(req: Request, res: Response, next: NextFunction) => {
    const token =  String(req.headers.authorization)

    if(!token){
        return res.status(401).json({
            message: "Invalid token",
          });
    }

    jwt.verify(
        token,
        String(process.env.JWT_SECRET),
        (error:any,decoded:any)=>{
            const timeActual = Math.floor((new Date).getTime() / 1000)
            if(error){
                return res.status(401).json({
                    message: "Invalid token",
                  });
            }

            if(timeActual >= decoded.exp){
                return res.status(401).json({
                    message: "Expired token",
                  });
            }
            return next()
        }
    )
    
}

export default authenticationMiddleware
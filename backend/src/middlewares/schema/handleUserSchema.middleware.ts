import { Request, Response, NextFunction } from "express";
import { IUserRequest } from "../../interface/user.inteface";
import { SchemaOf } from "yup";

const handleSchemaUserCreate = (schema: SchemaOf<IUserRequest>) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
        const data = req.body;
        const validatedData = await schema.validate(data, {
          abortEarly: false,
          stripUnknown: true,
        });
  
        if(validatedData){
          next();
        }
  
      } catch (err: any) {
        if (err) {
          return res.status(400).json(err.errors?.join(", ") as string);
        }
      }
    };

    export default handleSchemaUserCreate
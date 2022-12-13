import * as yup from "yup"
import {SchemaOf} from "yup"
import { IUserRequest } from "../interface/user.inteface"

export const userSchema: SchemaOf<IUserRequest> = Object(yup.object().shape({
    username: yup.string().min(3,"Username Deve Conter no Mínimo 3 Caracteres").required(),
    password: yup.string().min(8,"Senha Deve Ter Minimo de 8 Caracteres, Uma Letra Maiúscula e Um Número").required().matches(/^(?=.*[A-Z])[0-9a-zA-Z$*&@#]{8,}$/,"Senha Deve Ter Minimo de 8 Caracteres, Uma Letra Maiúscula e Um Número")
}))